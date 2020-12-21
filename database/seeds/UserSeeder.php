<?php

use Illuminate\Database\Seeder;
use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Xuan Canh',
            'email' => 'xcp@gmail.com',
            'password' => bcrypt('12345678'),
            'isAdmin' => true
        ]);
    }
}
