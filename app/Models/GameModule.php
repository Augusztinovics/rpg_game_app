<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameModule extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'gm_id',
        'game',
        'game_module_name',
        'game_module_state',
        'game_active'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'game_active' => 'boolean',
    ];

    public function players()
    {
        return $this->hasMany(GameModulePlayer::class, 'game_module_id');
    }

    public function gameModuleDatas()
    {
        return $this->hasMany(GameModuleData::class, 'game_module_id');
    }
}
