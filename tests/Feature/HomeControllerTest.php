<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class HomeControllerTest extends TestCase
{
    public function test_Home()
    {
        $this->withoutMiddleware();
        $response = $this->get('home');
        $contents = (string) $this->view('home');
        $response->assertSuccessful();
        $response->assertContent($contents);
    }

    public function test_Admin()
    {
        $this->withoutMiddleware();
        $response = $this->get('admin/admin');
        $expect = (string) $this->view('admin.admin');
        $response->assertSuccessful();
        $response->assertContent($expect);
    }

    public function test_User()
    {
        $this->withoutMiddleware();
        $response = $this->get('user/user');
        $expect = (string) $this->view('user.user');
        $response->assertSuccessful();
        $response->assertContent($expect);
    }

    public function checkRole()
    {
        $this->withoutMiddleware();
        $response = $this->get('/checkRole');
        // $expect = (string) $this->view('user.user');

        // $response->assertRedirectToRoute();
    }
}
