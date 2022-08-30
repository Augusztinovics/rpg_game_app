<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameModuleData extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'game_module_id',
        'game_module_data_order',
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

    public function gameModule() {
        return $this->belongsTo(GameModule::class, 'game_module_id');
    }
}
