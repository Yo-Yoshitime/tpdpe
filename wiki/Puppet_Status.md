<h1><span>Puppet Status</span></h1>
 
<p>There are several Puppet ailments in Touhou Puppet Dance Performance, most of which are flat out derived from the Pokemon games. Some, however, have been tweaked a bit, and some others are entirely new.</p>

<p>All Puppets have two status slots, allowing them to have two one-slot status conditions at once, such as Poison and Burn. However, statuses like Heavy Poison and Heavy Burn use two status slots, preventing the afflicted Puppet from being inflicted with further status conditions until cured through an <a href="{{ '/Items' | relative_url }}" title="Items">item</a>, <a href="{{ '/Skills' | relative_url }}" title="Skills">skill</a>, or <a href="{{ '/Adilities' | relative_url }}" title="Abilities">ability</a>.</p>

<p>Some types, such as <a href="{{ '/Fire' | relative_url }}" title="Fire">Fire</a> and <a href="{{ '/Poison' | relative_url }}" title="Poison">Poison</a> have innate status immunity under normal conditions (listed on the <a href="{{ '/Type_Chart' | relative_url }}" title="Type Chart">Type Chart</a> page), <a href="{{ '/Resonance' | relative_url }}" title="Resonance">Resonance</a> bypasses this immunity if a status is passed on to the aforementioned types. Further immunities are listed under the respective status condition.</p>

<p>Additionally, if a Puppet is trapped (either via <a href="{{ '/Abilities' | relative_url }}" title="Abilities">Ability</a> or <a href="{{ '/Skills' | relative_url }}" title="Skills">Skill</a>), they will still be able to switch out with Pivoting moves such as <a href="{{ '/Changeling' | relative_url }}" title="Changeling">Changeling</a> or <a href="{{ '/Lighting_Speed' | relative_url }}" title="Lightning Speed">Lightning Speed</a>, as well as being hit while holding the Retreat Manual item or attacking a Puppet holding the Eviction Notice item. Puppets with the <a href="{{ '/Peaceful' | relative_url }}" title="Peaceful">Peaceful</a> ability or Puppets that are <a href="{{ '/Nether' | relative_url }}" title="Nether">Nether</a>-type are able to ignore this restriction and switch regardless of the trapping method, even if it is self-inflicted, unless the Puppet is trapped through the <a href="{{ '/Restraint' | relative_url }}" title="Restraint">Restraint</a> ability.
</p>


<h2><span>Status Effects</span></h2>

<div class="tab">
 <div id="center">
  <button class="scroll-left" onclick="ScrollLeft()"><i class="arrow arrow-left"></i></button>
  
  <button class="tablinks" onclick="statusList(event, 'Poison')" id="defaultOpen"><b>Poison</b></button>
  <button class="tablinks" onclick="statusList(event, 'Heavy_Poison')"><b>Heavy Poison</b></button>
  <button class="tablinks" onclick="statusList(event, 'Burn')"><b>Burn</b></button>
  <button class="tablinks" onclick="statusList(event, 'Heavy_Burn')"><b>Heavy Burn</b></button>
  <button class="tablinks" onclick="statusList(event, 'Stopped')"><b>Stopped</b></button>
  <button class="tablinks" onclick="statusList(event, 'Darkness')"><b>Darkness</b></button>
  <button class="tablinks" onclick="statusList(event, 'Fear')"><b>Fear</b></button>
  <button class="tablinks" onclick="statusList(event, 'Paralyze')"><b>Paralyze</b></button>
  <button class="tablinks" onclick="statusList(event, 'Shocked')"><b>Shocked</b></button>
  <button class="tablinks" onclick="statusList(event, 'Weakness')"><b>Weakness</b></button>
  <button class="tablinks" onclick="statusList(event, 'Heavy_Weakness')"><b>Heavy Weakness</b></button>

  <button class="scroll-right" onclick="ScrollRight()"><i class="arrow arrow-right"></i></button>
  </div>
</div>


<div id="Poison" class="tabcontent">
<p>Deals 1/8th HP at the end of every turn. Poison and Steel Types are immune to this condition.
<br>Uses one slot.</p>
</div>

<div id="Heavy_Poison" class="tabcontent">
<p>Deals damage at the ending of every turn. The damage increases by 1/16th each turn. Causing the Poison status on something that is already Poisoned will turn it into Heavy Poison. Poison and Steel Types are immune to this condition.
<br>Uses two slots.</p>
</div>

<div id="Burn" class="tabcontent">
<p>Deals 1/8th HP at the end of every turn. Fire Types are immune to this condition.
<br>Uses one slot.</p>
</div>

<div id="Heavy_Burn" class="tabcontent">
<p>Deals damage at the ending of every turn. The damage increases by 1/16th each turn. Causing the Burn status on something that is already Burned will turn it into Heavy Burn. Fire Types are immune to this condition.
<br>Uses two slots.</p>
</div>

<div id="Stopped" class="tabcontent">
<p>A Stopped Puppet cannot use any Skills for 2-4 turns.
<br>Uses two slots.</p>
</div>

<div id="Darkness" class="tabcontent">
<p>Halves a Puppet's Focus Attack stat.
<br>Uses one slot.</p>
</div>

<div id="Fear" class="tabcontent">
<p>Halves a Puppet's Spread Attack stat.
<br>Uses one slot.</p>
</div>

<div id="Paralyze" class="tabcontent">
<p>Quarters a Puppet's Speed stat. Electric Types are immune to this condition.
<br>Uses one slot.</p>
</div>

<div id="Shocked" class="tabcontent">
<p>Quarters a Puppet's Speed stat and renders it unable to avoid any attacks for the duration of the status. Causing the Paralysis status on something that is already Paralyzed will turn it into Shocked. Electric types are immune to this condition.
<br>Uses two slots.</p>
</div>

<div id="Weakness" class="tabcontent">
<p>Prevents the use of Skills that recover HP, but Items that restore HP can still be used. Skills that drain the opponent's HP will still deal damage, but will not heal the user.
<br>Uses one slot.</p>
</div>

<div id="Heavy_Weakness" class="tabcontent">
<p>Prevents the use of Skills that recover HP, but Items that restore HP can still be used. Skills that drain the opponent's HP will still deal damage, but will not heal the user. In addition, every skill usage will consume 2 SP, similar to when the opposing puppet has the ability <a href="{{ '/Unjustness' | relative_url }}" title="Unjustness">Unjustness</a> (also stacks with the abilities effect to drain 3 SP). Causing the Weakness status on something that is already Weak will turn it into Heavy Weakness.
<br>Uses two slots.</p>
</div>

<h2><span>Status Effects that take up no Status Slots</span></h2>
<p><b>Note</b>: These statuses take up no slots, and can be received even if both Status slots are filled. The following status effects <b>can</b> be passed with the use of <a href="{{ '/Backup_Plan' | relative_url }}" title="Backup Plan">Backup Plan</a>, so be careful.
</p>

<div class="tab2">
 <div id="center2">
  <button class="scroll-left" onclick="ScrollLeft2()"><i class="arrow arrow-left"></i></button>
  
  <button class="tablinks2" onclick="statusNoList(event, 'Seeded')" id="defaultOpen2"><b>Seeded</b></button>
  <button class="tablinks2" onclick="statusNoList(event, 'Claimed')"><b>Claimed</b></button>
  <button class="tablinks2" onclick="statusNoList(event, 'Shinigami')"><b>Shinigami</b></button>
  <button class="tablinks2" onclick="statusNoList(event, 'Rooted')"><b>Rooted</b></button>
  <button class="tablinks2" onclick="statusNoList(event, 'Camouflage')"><b>Camouflage</b></button>
  <button class="tablinks2" onclick="statusNoList(event, 'Substitute')"><b>Substitute</b></button>
  <button class="tablinks2" onclick="statusNoList(event, 'Calamity')"><b>Calamity</b></button>

  <button class="scroll-right" onclick="ScrollRight2()"><i class="arrow arrow-right"></i></button>
 </div>
</div>


<div id="Seeded" class="tabcontent2">
<p>Can only be caused by the Skill <a href="{{ '/Drain_Seed' | relative_url }}" title="Drain Seed">Drain Seed</a>. The puppet will receive damage at the end of each turn equal to 1/16th of their max HP, and the opponent will recover 100% of the HP absorbed. Nature type puppets are immune to this status. Can be removed by either switching out, or by using <a href="{{ '/Smash_Spin' | relative_url }}" title="Smash Spin">Smash Spin</a>. The seeded puppet's HP will be drained and absorbed by the opponent even if the original user of Drain Seed has switched out.</p>
</div>

<div id="Claimed" class="tabcontent2">
<p>Can only be caused by the Skill <a href="{{ '/Claim' | relative_url }}" title="Claim">Claim</a>. The puppet is unable to use the same skill twice in a row. If the affected puppet is holding a Choice item, they will be forced to use <a href="{{ '/Struggle' | relative_url }}" title="Struggle">Struggle</a> every other turn. Has no effect on the skill Struggle itself. Can be removed by switching out.</p>
</div>

<div id="Shinigami" class="tabcontent2">
<p>Can only be caused by the Skill <a href="{{ '/Shinigamis_Waltz' | relative_url }}" title="Shinigami's Waltz">Shinigami's Waltz</a>. The targeted puppet becomes possessed by a Shinigami, who drains 1/4 of the targeted puppet's max HP at the end of each turn. Can be removed by switching out.</p>
</div>

<div id="Rooted" class="tabcontent2">
<p>Can only be caused by the Skill <a href="{{ '/Fountain_of_Life' | relative_url }}" title="Fountain of Life">Fountain of Life</a>. The user roots themselves, becoming unable to switch via the Puppets menu or be blown away with moves such as <a href="{{ '/Squall' | relative_url }}" title="Squall">Squall</a> or <a href="{{ '/Charging_Stun' | relative_url }}" title="Charging Stun">Charging Stun</a>. However, the user will recover 6% of their maximum HP per turn. Can be removed by switching out via moves like <a href="{{ '/Changeling' | relative_url }}" title="Changeling">Changeling</a> or <a href="{{ '/Lightning_Speed' | relative_url }}" title="Lightning Speed">Lightning Speed</a>, by holding the Retreat Manual item and receiving damage, or by attacking an opposing Puppet holding the Eviction Notice item.</p>
</div>

<div id="Camouflage" class="tabcontent2">
<p>Can only be caused by the Skill <a href="{{ '/Camouflage' | relative_url }}" title="Camouflage">Camouflage</a>. Provides no benefit to the user, but allows Dark Sphere to skip Accuracy checks and deal double damage when used against Puppets with the Camouflage status.</p>
</div>

<div id="Substitute" class="tabcontent2">
<p>Can only be caused by the Skill <a href="{{ '/Magic_Barrier' | relative_url }}" title="Magic Barrier">Magic Barrier</a>. Puts up a barrier using a fourth (25%) of the user's maximum HP. The barrier has its own health bar, equivalent to the amount of health sacrificed to create it. The barrier can be passed through use of <a href="Backup_Plan" title="Backup Plan">Backup Plan</a>, maintaining its current HP value and being applied to the Puppet that is switched in.</p>
</div>

<div id="Calamity" class="tabcontent2">
<p>Inflicted on both sides by <a href="{{ '/Ruinous_Voice' | relative_url }}" title="Ruinous Voice">Ruinous Voice</a>. At the end of each turn, a counter ticks down by one, beginning at three. If the counter hits zero, the afflicted Puppet will faint regardless of condition. Using <a href="{{ '/Backup_Plan' | relative_url }}" title="Backup Plan">Backup Plan</a> while inflicted with <a href="{{ '/Ruinous_Voice' | relative_url }}" title="Ruinous Voice">Ruinous Voice</a> will pass the counter on to the Puppet that has switched in. Can be removed by switching out.</p>
</div>



<h2><span>Temporary Conditions</span></h2>
<p><b>Note</b>: These statuses take up no slots, and can be received even if both Status slots are filled. The following status effects <b>cannot</b> be passed with the use of <a href="{{ '/Backup_Plan' | relative_url }}" title="Backup Plan">Backup Plan</a>.
</p>

<div class="tab3">
 <div id="center3">
  <button class="scroll-left" onclick="ScrollLeft3()"><i class="arrow arrow-left"></i></button>
 
  <button class="tablinks3" onclick="statusTempList(event, 'Confusion')" id="defaultOpen3"><b>Confusion</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Bound')"><b>Bound</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Restrained')"><b>Restrained</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Flinch')"><b>Flinch</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Stance_Broken')"><b>Stance Broken</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Upbeat')"><b>Upbeat</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Skill-Seal')"><b>Skill-Seal</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Word_Break')"><b>Word Break</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Electrified')"><b>Electrified</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Trapped')"><b>Trapped</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Mirage')"><b>Mirage</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Soaked')"><b>Soaked</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Clean_Slate')"><b>Clean Slate</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Ghostly')"><b>Ghostly</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Charged')"><b>Charged</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Bracing')"><b>Bracing</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Charging')"><b>Charging</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Invulnerable')"><b>Invulnerable</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Semi-Invulnerable')"><b>Semi-Invulnerable</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Recharging')"><b>Recharging</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Water_Veil')"><b>Water Veil</b></button>
  <button class="tablinks3" onclick="statusTempList(event, 'Lucky_Rainbow')"><b>Lucky Rainbow</b></button>

  <button class="scroll-right" onclick="ScrollRight3()"><i class="arrow arrow-right"></i></button>
 </div>
</div>


<div id="Confusion" class="tabcontent3">
<p>A Confused Puppet has a 50% chance of doing nothing for 1-4 turns.</p>
</div>

<div id="Bound" class="tabcontent3">
<p>The puppet is bound by the opposing puppet for 4-5 turns, and takes 1/16th max HP at the end of every turn, and is unable to switch out during the duration, unless they are a Nether type, holding a Substitute Tag, use a Pivoting Skill such as <a href="{{ '/Changeling' | relative_url }}" title="Changeling">Changeling</a>, forced out by a Phasing Skill such as <a href="{{ '/Squall' | relative_url }}" title="Squall">Squall</a>, removing the effect with <a href="{{ '/Smash_Spin' | relative_url }}" title="Smash Spin">Smash Spin</a>, trigger opponents Eviction Notice, or trigger your own Retreat Manual.</p>
</div>

<div id="Restrained" class="tabcontent3">
<p>Similar to Bound, except is instead triggered by attempting to use a Pivoting Skill on a puppet with the <a href="{{ '/Restraint' | relative_url }}" title="Restraint">Restraint</a> ability. When under this effect, the puppet is unable to switch out altogether for 2 turns, with exception of the same examples listed in Bound, except Pivoting Skills, since that's what triggers the status, as well as <a href="{{ '/Smash_Spin' | relative_url }}" title="Smash Spin">Smash Spin</a>.
Additionally, this is the only form of trapping <a href="{{ '/Nether' | relative_url }}" title="Nether">Nether</a>-type Puppets are not immune to, and will be trapped regardless.</p>
</div>

<div id="Flinch" class="tabcontent3">
<p>Prevents a Puppet from using any Skills for one turn. A Flinch will only occur if the Puppet moves after its opponent.</p>
</div>

<div id="Stance_Broken" class="tabcontent3">
<p>Prevents a Puppet from avoiding any attacks for one full turn. Specifically, it causes the next attack used on the puppet affected with this status to skip an accuracy check, meaning all skills, including ones like <a href="{{ '/Shattering_Earth' | relative_url }}" title="Shattering Earth">Shattering Earth</a>, which normally are unaffected by increased accuracy, will always hit.</p>
</div>

<div id="Upbeat" class="tabcontent3">
<p>Can only be caused by the move <a href="{{ '/Upbeat' | relative_url }}" title="Upbeat">Upbeat</a>. The puppet becomes unable to use skills from the Status category for the next 3 turns after being affected. Fades after next 3 turns, or by switching out. Puppets with <a href="{{ '/Composed' | relative_url }}" title="Composed">Composed</a> or <a href="{{ '/Free_Will' | relative_url }}" title="Free Will">Free Will</a> are immune to this condition.</p>
</div>

<div id="Skill-Seal" class="tabcontent3">
<p>The puppet's last used move is unable to be used for the next 4 turns. If the affected puppet is holding a Choice item, or locked into using it by <a href="{{ '/Encourage' | relative_url }}" title="Encourage">Encourage</a>, it will be forced to use <a href="{{ '/Struggle' | relative_url }}" title="Struggle">Struggle</a> until the status fades. Ends after 4 full turns, or by switching out. Puppets with <a href="{{ '/Free_Will' | relative_url }}" title="Free Will">Free Will</a> are immune to this condition.</p>
</div>

<div id="Word_Break" class="tabcontent3">
<p>Almost identical to Skill-Seal, only difference being that it instead seals 2 random skills, instead of the last used one, and can also be used even if the opposing puppet hasn't used a skill yet. If the affected puppet is holding a Choice item, or locked into using it by <a href="{{ '/Encourage' | relative_url }}" title="Encourage">Encourage</a>, it will be forced to use <a href="{{ '/Struggle' | relative_url }}" title="Struggle">Struggle</a> until the status fades. Ends after 4 full turns, or by switching out. Puppets with <a href="{{ '/Free_Will' | relative_url }}" title="Free Will">Free Will</a> are immune to this condition.</p>
</div>

<div id="Electrified" class="tabcontent3">
<p>Changes the next skill the foe uses to be Electric-type, regardless of its original typing.</p>
</div>

<div id="Trapped" class="tabcontent3">
<h2><span>Skills</span></h2>
<p>The foe becomes unable to switch out until the user leaves the field, unless the user is <a href="{{ '/Nether' | relative_url }}r" title="Nether">Nether</a>-type. Applied through the skill <a href="{{ '/Black_Hole' | relative_url }}" title="Black Hole">Black Hole</a>.
</p>
<h2><span>Abilities</span></h2>
 <p><a href="{{ '/Shadow_Stitch' | relative_url }}" title="Shadow Stitch">Shadow Stitch</a> - Prevents the opponent from switching out, unless the opponent is <a href="{{ '/Nether' | relative_url }}" title="Nether">Nether</a>-type. This ability does not prevent fleeing from Wild Battles.<br><a href="{{ '/Adverse_Wind' | relative_url }}" title="Adverse Wind">Adverse Wind</a> - Prevents the opponent from switching out, unless the opponent is <a href="{{ '/Wind' | relative_url }}" title="Wind">Wind</a> or <a href="{{ '/Nether' | relative_url }}" title="Nether">Nether</a>-type. This ability does not prevent fleeing from Wild Battles.<br><a href="{{ '/Battle_Mania' | relative_url }}" title="Battle Mania">Battle Mania</a> - Prevents opposing <a href="{{ '/Fighting' | relative_url }}" title="Fighting">Fighting</a>-type Puppets from switching out. This ability does not prevent fleeing from Wild Battles.<br><a href="{{ '/Poison_Labyrinth' | relative_url }}" title="Poison Labyrinth">Poison Labyrinth</a> - Prevents the opponent from switching out, unless the opponent is <a href="{{ '/Poison' | relative_url }}" title="Poison">Poison</a> or <a href="{{ '/Nether' | relative_url }}" title="Nether">Nether</a>-type. This ability does not prevent fleeing from Wild Battles.
<br><b>Note:</b>
</p>
Moves such as <a href="{{ '/Changeling' | relative_url }}" title="Changeling">Changeling</a> and <a href="{{ '/Lighting_Speed' | relative_url }}" title="Lightning Speed">Lightning Speed</a> still allow the user to switch out while applicable Skills or Abilities are in play. For an exception, check <a href="{{ '/Restraint' | relative_url }}" title="Restraint">Restraint</a>, though this rule only applies if a Puppet is trapped by <a href="{{ '/Black_Hole' | relative_url }}" title="Black Hole">Black Hole</a>, as a given Puppet cannot have two abilities simultaneously under normal conditions.
</div>

<div id="Mirage" class="tabcontent3">
<p>Can only be caused by the Skill <a href="{{ '/Mirage' | relative_url }}" title="Mirage">Mirage</a>. For the turn of use only, reflects incoming Status moves directed at the user back to the opponent. This effect is not persistent unlike <a href="{{ '/Curse_Return' | relative_url }}" title="Curse Return">Curse Return</a>.</p>
</div>

<div id="Soaked" class="tabcontent3">
<p>Can only be caused by <a href="{{ '/Aquatic_Waltz' | relative_url }}" title="Aquatic Waltz">Aquatic Waltz</a>. Changes the target's <a href="{{ '/Type_Chart' | relative_url }}" title="Type Chart">type</a> to <a href="{{ '/Water' | relative_url }}" title="Water">Water</a>. Can be removed by switching out. The skill fails on Puppets that are already <a href="{{ '/Water' | relative_url }}" title="Water">Water</a>-type, unless the Puppet has a secondary type.</p>
</div>

<div id="Clean_Slate" class="tabcontent3">
<p>Can only be caused by <a href="{{ '/Tabula_Rasa' | relative_url }}" title="Tabula Rasa">Tabula Rasa</a>. Changes the target's <a href="{{ '/Type_Chart' | relative_url }}" title="Type Chart">type</a> to <a href="{{ '/Void' | relative_url }}" title="Void">Void</a>. Can be removed by switching out.</p>
</div>

<div id="Ghostly" class="tabcontent3">
<p>Can only be caused by <a href="{{ '/Ghost_Chase' | relative_url }}" title="Ghost Chase">Ghost Chase</a>. Makes the user immune to <a href="{{ '/Fighting' | relative_url }}" title="Fighting">Fighting</a>-type moves, persists until switching out.</p>
</div>

<div id="Charged" class="tabcontent3">
<p>Can only be caused by <a href="{{ '/Lighting_Charge' | relative_url }}" title="Lightning Charge">Lightning Charge</a>. Raises the user's SpDef, and if an <a href="{{ '/Electric' | relative_url }}" title="Electric">Electric</a>-type Skill is used on the following turn, the resulting damage is doubled.
<br><b>Note:</b>
As mentioned on the <a href="{{ '/Lighting_Charge' | relative_url }}" title="Lightning Charge">Lightning Charge</a> page, the BP of the move is not doubled, triggering the effects of items like <a href="{{ '/Small_Bit' | relative_url }}" title="Small Bit">Small Bit</a> or <a href="{{ '/Wariness' | relative_url }}" title="Wariness">Wariness</a> if the Skill does not meet the BP threshold.</p>
</div>

<div id="Bracing" class="tabcontent3">
<p>The user attempts to survive the next incoming attack with 1 HP. May fail if used consecutively, and does not prevent fainting from damage over time such as Burn.</p>
</div>

<div id="Charging" class="tabcontent3">
<p>The effect changes depending on which skill is used. <a href="{{ '/Items' | relative_url }}" title="Items">Haste Charm</a> and <a href="{{ '/Fast_talker' | relative_url }}" title="Fast Talker">Fast Talker</a> can skip the charging turn for the following moves, allowing the Skill portion to be used instantly.
<br><a href="{{ '/Firm_Spirit' | relative_url }}" title="Firm Spirit">Firm Spirit</a> - On the first turn, the user's FoDef is raised. The attack is used on the second turn.
<br><a href="{{ '/Gensokyo_Typhoon' | relative_url }}" title="Gensokyo Typhoon">Gensokyo Typhoon</a> - On the first turn, the user charges the Skill. The attack is used on the second turn.
<br><a href="{{ '/Rainbow_Flowers' | relative_url }}" title="Rainbow Flowers">Rainbow Flowers</a> - On the first turn, the user charges the Skill. This charge turn is skipped if the Skill is used during <a href="{{ '/Weather' | relative_url }}" class="mw-redirect" title="Weather">Aurora</a>.
<br><a href="{{ '/Meteor_Impact' | relative_url }}" title="Meteor Impact">Meteor Impact</a> - Present on the charge portion of the move, and is removed if the user is successfully targeted and damaged by an incoming Skill, causing the move to fail.</p>
</div>

<div id="Invulnerable" class="tabcontent3">
<p>Can only be caused by <a href="{{ '/Supernatural_Border' | relative_url }}" title="Supernatural Border">Supernatural Border</a> and <a href="{{ '/Thorned_Ivy' | relative_url }}" title="Thorned Ivy">Thorned Ivy</a>. Blocks incoming damage for the turn it is used, but does not block damage over time. Can be bypassed by <a href="{{ '/Shadow_Rush' | relative_url }}" title="Shadow Rush">Shadow Rush</a> and <a href="{{ '/Stalk_and_Murder' | relative_url }}" title="Stalk and Murder">Stalk and Murder</a>.</p>
</div>

<div id="Semi-Invulnerable" class="tabcontent3">
<p>Can only be caused by <a href="{{ '/Stalk_and_Murder' | relative_url }}" title="Stalk and Murder">Stalk and Murder</a>. The user becomes unable to be targeted by incoming damage, but can still take damage from sources such as Burn or Poison. If the charging portion of <a href="{{ '/Stalk_and_Murder' | relative_url }}" title="Stalk and Murder">Stalk and Murder</a> is skipped, Semi-Invulnerability will not apply.</p>
</div>

<div id="Recharging" class="tabcontent3">
<p>Applied after using <a href="{{ '/Aqua_Rake' | relative_url }}" title="Aqua Rake">Aqua Rake</a>, <a href="{{ '/Cataclysm' | relative_url }}" title="Cataclysm">Cataclysm</a>, <a href="{{ '/Deflagration' | relative_url }}" title="Deflagration">Deflagration</a>, <a href="{{ '/Pulse_Laser' | relative_url }}" title="Pulse Laser">Pulse Laser</a>, and <a href="{{ '/Vacuum_Rupture' | relative_url }}" title="Vacuum Rupture">Vacuum Rupture</a>. The user is inactionable on the turn following usage of the move, preventing selection of Fight, Puppets, Bag, or Flee.</p>
</div>

<div id="Water_Veil" class="tabcontent3">
<p>Can only be caused by <a href="{{ '/Water_Veil' | relative_url }}">Water Veil</a>. For five turns following use of the Skill, the user's party cannot have their stats lowered by the opponent. Does not prevent Puppets on the user's team from lowering their own stats, through sources like <a href="{{ '/Volcano' | relative_url }}" title="Volcano">Volcano</a> and <a href="{{ '/Off-Season_Bloom' | relative_url }}" title="Off-Season Bloom">Off-Season Bloom</a>.</p>
</div>

<div id="Lucky_Rainbow" class="tabcontent3">
<p>Can only be caused by <a href="{{ '/Lucky_Rainbow' | relative_url }}" title="Lucky Rainbow">Lucky Rainbow</a>. For five turns following use of the Skill, the user's party cannot be inflicted with status conditions that take up a slot. <a href="{{ '/Lucky_Rainbow' | relative_url }}" title="Lucky Rainbow">Lucky Rainbow</a> does not prevent infliction of status from moves such as <a href="{{ '/Drain_Seed' | relative_url }}" title="Drain Seed">Drain Seed</a> or <a href="{{ '/Word_Break' | relative_url }}" title="Word Break">Word Break</a>.</p>
</div>
