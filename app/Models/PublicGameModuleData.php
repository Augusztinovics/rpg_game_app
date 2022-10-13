<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PublicGameModuleData extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'public_game_module_id',
        'module_data'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'module_data' => 'array',
    ];

    public function publicGameModule()
    {
        return $this->belongsTo(PublicGameModule::class, 'public_game_module_id');
    }
}
