# Authentication

The following is a basic guide to setup authentication for Luma Vue using an external Laravel API.

## Setup Laravel

Create a new Laravel project.

```
laravel new luma-vue-laravel-auth
```

## Database

Enable sqlite database connection in the `.env` file:

```
DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=luma_laravel
# DB_USERNAME=root
# DB_PASSWORD=
```

Create the database file:

```
touch database/database.sqlite
```

## Laravel Fortify

Install Laravel Fortify:

```
composer require laravel/fortify
```

Publish the Fortify configuration:

```
php artisan vendor:publish --provider="Laravel\Fortify\FortifyServiceProvider"
```

Register the Fortify Service Provider in `config/app.php`:

```
App\Providers\FortifyServiceProvider::class,
```

## Laravel Sanctum

Install Laravel Sanctum:

```
composer require laravel/sanctum
```

Publish the Sanctum configuration:

```
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

Next, add Sanctum's middleware to your `api` middleware group within your `app/Http/Kernel.php` file:

```
'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
],
```

Configure Your First-Party Domains in `.env`. This should match the hostname and PORT of the SPA:

```
SANCTUM_STATEFUL_DOMAINS=localhost:8080
```

## CORS

Configure CORS in `config/cors.php`:

```
'paths' => ['*'],
'supports_credentials' => true,
```

Disable CSRF Token in `app/Http/Middleware/VerifyCsrfToken.php`:

```
protected $except = [
    '/login',
    '/register',
    '/reset-password'
];
```

Create a mock `/home` route in `routes/web.php` so we don't get a 404 after login:

```
Route::get('/home', function () {
    return view('welcome');
});
```

Update the `/api/user` route in `routes/api.php` to use `sanctum`:

```
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
```

## Test Data

Create test user data in `database/seeders/UsersTableSeeder.php`:

```
<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        User::truncate();

        User::factory(1)->create([
            'email' => 'test@luma.test',
            'password' => bcrypt('12345678')
        ]);
    }
}

```

Run the database migrations:

```
php artisan migrate
```

Run the database seeder:

```
php artisan db:seed --class="UsersTableSeeder"
```

Change mailer driver (for reset password) in `.env`:

```
MAIL_MAILER=log
```

## Run Application

Serve application:

```
php artisan serve
```