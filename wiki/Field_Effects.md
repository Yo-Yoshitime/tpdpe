# <span>Field Effects</span>

<p>There are two classes of field effects that affect all participants in a battle: <b>Weather</b> and <b>Terrain</b>, each category being able to maintain only one effect at once. If the relevant slot is already filled, the most recent effect takes precedence. For example, if you were to switch a <a href="{{ '/Power_Sanae' | relative_url }}" title="Power Sanae">Power Sanae</a> with <a href="{{ '/Phlegmatic' | relative_url }}" title="Phlegmatic">Phlegmatic</a> in while <a href="{{ '/Weather_Aurora' | relative_url }}" title="Weather Aurora">Aurora</a> was active, the weather would become <a href="{{ '/Weather_Calm' | relative_url }}" title="Weather Calm">Calm</a>.
</p>

<h2><span>Types of Weather Effects</span></h2>
<div class="tab">
 <div id="center">
  <button class="scroll-left" onclick="ScrollLeft()"><i class="arrow arrow-left"></i></button>
  
  <button class="tablinks" onclick="objectList(event, 'Clear_(No_Weather)')" id="defaultOpen"><b>Clear (No Weather)</b></button>
  <button class="tablinks" onclick="objectList(event, 'Calm')"><b>Calm</b></button>
  <button class="tablinks" onclick="objectList(event, 'Aurora')"><b>Aurora</b></button>
  <button class="tablinks" onclick="objectList(event, 'Heavy_Fog')"><b>Heavy Fog</b></button>
  <button class="tablinks" onclick="objectList(event, 'Dust_Storm')"><b>Dust Storm</b></button>
  <button class="tablinks" onclick="objectList(event, 'Sunshower')"><b>Sunshower</b></button>

  <button class="scroll-right" onclick="ScrollRight()"><i class="arrow arrow-right"></i></button>
  </div>
</div>

<div id="Clear_(No_Weather)" class="tabcontent">
<h2><span>Effect</span></h2>
<p>Default Weather, no additional effects.</p>
 
<h2><span>Skills</span></h2>
<h3><span>Change Weather to Clear</span></h3>
<ul><li><a href="{{ '/Sunbeam_Dance' | relative_url }}" title="Sunbeam Dance">Sunbeam Dance</a> - While another Weather effect is currently active, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Passing_Breeze' | relative_url }}" title="Passing Breeze">Passing Breeze</a> - While another Weather effect is currently active, deals 2x damage, then sets weather to Clear.</li></ul>

<h3><span>Have Different Effects when Weather is Clear</span></h3>
<ul><li><a href="{{ '/Heavenly_Blessing' | relative_url }}" title="Heavenly Blessing">Heavenly Blessing</a> - While no weather is currently active, is treated as a normal attack.</li>
<li><a href="{{ '/Heveanly_Influence' | relative_url }}" title="Heavenly Influence">Heavenly Influence</a> - While no weather is currently active, is treated as a normal attack.</li></ul>

<h2><span>Abilities</span></h2>
<p>There are no abilities that set, or benefit from "Clear" weather, however-</p>
<ul><li><a href="{{ '/Weather_Resist' | relative_url }}" title="Weather Resist">Weather Resist</a> - While a puppet with this ability is on the field, the current Weather is treated as Clear, while not actually changing the weather.</li></ul>
</div>


<div id="Calm" class="tabcontent">
<h2><span>Effect</span></h2>
<p><b><a href="{{ '/Weather_Calm' | relative_url }}" title="Weather Calm">Calm</a></b> prevents additional effects of skills from occurring. It is essentially <a href="{{ '/Poker_Face' | relative_url }}" title="Poker Face">Poker Face</a> as a field effect. 
</p>
<ul><li>Additional effects are the effects listed on attacking skills that do something besides damage, like "10% chance to scare opponent".</li>
<li>It also works on skills that normally have guaranteed secondary effects, including <a href="{{ '/Raid' | relative_url }}" title="Raid">Raid</a>.</li>
<li>It does not have any effect on increased critical hit rate skills, such as <a href="{{ '/Rocky_Barrage' | relative_url }}" title="Rocky Barrage">Rocky Barrage</a>. However, guaranteed critical hit skills, like <a href="{{ '/Geyser' | relative_url }}" title="Geyser">Geyser</a> are affected, but instead of losing their effect, they just become increased critical hit rate skills.</li>
<li>It also disable One-Hit KO skills.</li></ul>

<h2><span>Skills</span></h2>
<h3><span>Change Weather to Calm</span></h3>
<ul><li><a href="{{ '/Weather_Calm' | relative_url }}" title="Weather Calm">Weather Calm</a> - Changes current weather to Calm, if not already active, for 5 turns (increases to 8 turns if holding an Almighty or Silent Godstone), if already active, the skill fails without reseting turn limit.</li>
<li><a href="{{ '/Realm_Serenity' | relative_url }}" title="Realm Serenity">Realm Serenity</a> - Changes the current weather to Calm, and terrain to Seiryu for 5 turns, even if Calm or Seiryu are already active. Unaffected by Almighty of Silent Godstone, but can be reused while still active to reset the turn limit to 5.</li></ul>

<h3><span>Have Different Effects when Weather is Calm</span></h3>
<ul><li><a href="{{ '/Sunbeam_Dance' | relative_url }}" title="Sunbeam Dance">Sunbeam Dance</a> - While any Weather effect is currently active, except Clear, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Passing_Breeze' | relative_url }}" title="Passing Breeze">Passing Breeze</a> - While any Weather effect is currently active, except Clear, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Heavenly_Blessing' | relative_url }}" title="Heavenly Blessing">Heavenly Blessing</a> - While the weather is currently Calm, deals 2x damage and skills type becomes Wind.</li>
<li><a href="{{ '/Heavenly_Influence' | relative_url }}" title="Heavenly Influence">Heavenly Influence</a> - While the weather is currently Calm, deals 2x damage and skills type becomes Wind.</li></ul>

<h2><span>Abilities</span></h2>
<ul><li><a href="{{ '/Phlegmatic' | relative_url }}" title="Phlegmatic">Phlegmatic</a> - Sets Calm upon switching in, if not already active, for 5 turns, or 8 if holding a Almighty of Silent Godstone.</li>
<li><a href="{{ '/Stargazer' | relative_url }}" title="Stargazer">Stargazer</a> - When using <a href="/wiki/{{ '/Weather_Calm' | relative_url }}" title="Weather Calm">Weather Calm</a>, Calm will be permanently applied to the field until end of battle, or forcibly changed/removed by a skill or ability. (<a href="{{ '/Speed_Renko' | relative_url }}" title="Speed Renko">Speed Renko</a> only)</li></ul>

<h3><span>Gain Effects when Calm is Active</span></h3>
<ul><li><a href="{{ '/Breather' | relative_url }}" title="Breather">Breather</a> - While Calm is active, this puppets FoDef is increased by 50%, and recover 1/16th max HP at end of every turn.</li>
<li><a href="{{ '/Economist' | relative_url }}" title="Economist">Economist</a> - While Calm is active, once per turn, this puppets Hold Item 1 is recycled at the end of the turn at a 100% rate, if the weather is <b>not</b> Calm, the frequency of activation is dropped to only 50% chance.</li>
<li><a href="{{ '/Recalibration' | relative_url }}" title="Recalibration">Recalibration</a> - While Calm is active, this puppet's SpAtk and SpDef are increased by 50%</li>
<li><a href="{{ '/Zen' | relative_url }}" title="Zen">Zen</a> - While Calm is active, this puppet is immune to status effects (Poisoned, Burned, etc.), and recover 1/16th max HP at end of every turn.</li>
<li><a href="{{ '/Boundary_Blurrer' | relative_url }}" title="Boundary Blurrer">Boundary Blurrer</a> - While any weather is active, this puppets FoAtk, FoDef, SpAtk, and SpDef are doubled (x2) for as long as they are active. (<a href="{{ '/Power_Maribel' | relative_url }}" title="Power Maribel">Power Maribel</a> only)</li></ul>
</div>


<div id="Aurora" class="tabcontent">
<h2><span>Effect</span></h2>
<p><b><a href="{{ '/Weather_Aurora' | relative_url }}" title="Weather Aurora">Aurora</a></b> increases the damage of Light-type skills by +50%, and halves (-50%) the damage of Dark-type skills.</p>

<h2><span>Skills</span></h2>
<h3><span>Change Weather to Aurora</span></h3>
<ul><li><a href="{{ '/Weather_Aurora' | relative_url }}" title="Weather Aurora">Weather Aurora</a> - Changes current weather to Aurora, if not already active, for 5 turns (increases to 8 turns if holding an Almighty or Halo Godstone), if already active, the skill fails without reseting turn limit.</li>
<li><a href="{{ '/Realm_Corona' | relative_url }}" title="Realm Corona">Realm Corona</a> - Changes the current weather to Aurora, and terrain to Byakko for 5 turns, even if Aurora or Byakko are already active. Unaffected by Almighty of Halo Godstone, but can be reused while still active to reset the turn limit to 5.</li></ul>

<h3><span>Have Different Effects when Weather is Aurora</span></h3>
<ul><li><a href="{{ '/Sunbeam_Dance' | relative_url }}" title="Sunbeam Dance">Sunbeam Dance</a> - While any Weather effect is currently active, except Clear, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Passing_Breeze' | relative_url }}" title="Passing Breeze">Passing Breeze</a> - While any Weather effect is currently active, except Clear, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Heavenly_Blessing' | relative_url }}" title="Heavenly Blessing">Heavenly Blessing</a> - While the weather is currently Aurora, deals 2x damage and skills type becomes Light (also boosted by Aurora's effect).</li>
<li><a href="{{ '/Heavenly_Influence' | relative_url }}" title="Heavenly Influence">Heavenly Influence</a> - While the weather is currently Aurora, deals 2x damage and skills type becomes Light (also boosted by Aurora's effect).</li>
<li><a href="{{ '/Rainbow_Flowers' | relative_url }}" title="Rainbow Flowers">Rainbow Flowers</a> - Works instantly during Aurora.</li>
<li><a href="{{ '/Dark_Globe' | relative_url }}" title="Dark Globe">Dark Globe</a> - Ignores the damage penalty of Aurora.</li></ul>

<h2><span>Abilities</span></h2>
<ul><li><a href="{{ '/Sanguine' | relative_url }}" title="Sanguine">Sanguine</a> - Sets Aurora upon switching in, if not already active, for 5 turns, or 8 if holding a Almighty of Halo Godstone.</li>
<li><a href="{{ '/Stargazer' | relative_url }}" title="Stargazer">Stargazer</a> - When using <a href="{{ '/Weather_Aurora' | relative_url }}" title="Weather Aurora">Weather Aurora</a>, Aurora will be permanently applied to the field until end of battle, or forcibly changed/removed by a skill or ability. (<a href="{{ '/Speed_Renko' | relative_url }}" title="Speed Renko">Speed Renko</a> only)</li></ul>

<h3><span>Gain Effects when Aurora is Active</span></h3>
<ul><li><a href="{{ '/Aurora_Grace' | relative_url }}" title="Aurora Grace">Aurora Grace</a> - While Aurora is active, this puppets SpDef is increased by 50%, and recover 1/16th max HP at end of every turn.</li>
<li><a href="{{ '/Flash' | relative_url }}" title="Flash">Flash</a> - While Aurora is active, this puppets Speed is increased by 100%.</li>
<li><a href="{{ '/Light_Curtain' | relative_url }}" title="Light Curtain">Light Curtain</a> - While Aurora is active, this puppet is immune to Confusion, and recovers from status ailments at the end of the turn.</li>
<li><a href="{{ '/Boundary_Blurrer' | relative_url }}" title="Boundary Blurrer">Boundary Blurrer</a> - While any weather is active, this puppets FoAtk, FoDef, SpAtk, and SpDef are doubled (x2) for as long as they are active. (<a href="{{ '/Power_Maribel' | relative_url }}" title="Power Maribel">Power Maribel</a> only)</li></ul>
</div>


<div id="Heavy_Fog" class="tabcontent">
<h2><span>Effect</span></h2>
<p><b><a href="{{ '/Weather_Heavy_Fog' | relative_url }}" title="Weather Heavy Fog">Heavy Fog</a></b> increases the damage of Dark-type skills by +50%, and halves (-50%) the damage of Light-type skills.</p>

<h2><span>Skills</span></h2>
<h3><span>Change Weather to Heavy Fog</span></h3>
<ul><li><a href="{{ '/Weather_Heavy_Fog' | relative_url }}" title="Weather Heavy Fog">Weather Heavy Fog</a> - Changes current weather to Heavy Fog, if not already active, for 5 turns (increases to 8 turns if holding an Almighty or Twilight Godstone), if already active, the skill fails without reseting turn limit.</li>
<li><a href="{{ '/Realm_Scarlet_Mist' | relative_url }}" title="Realm Scarlet Mist">Realm Scarlet Mist</a> - Changes the current weather to Heavy Fog, and terrain to Suzaku for 5 turns, even if Heavy Fog or Suzaku are already active. Unaffected by Almighty of Twilight Godstone, but can be reused while still active to reset the turn limit to 5.</li></ul>

<h3><span>Have Different Effects when Weather is Heavy Fog</span></h3>
<ul><li><a href="{{ '/Sunbeam_Dance' | relative_url }}" title="Sunbeam Dance">Sunbeam Dance</a> - While any Weather effect is currently active, except Clear, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Passing_Breeze' | relative_url }}" title="Passing Breeze">Passing Breeze</a> - While any Weather effect is currently active, except Clear, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Heavenly_Blessing' | relative_url }}" title="Heavenly Blessing">Heavenly Blessing</a> - While the weather is currently Heavy Fog, deals 2x damage and skills type becomes Dark (also boosted by Heavy Fog's effect).</li>
<li><a href="{{ '/Heavenly_Influence' | relative_url }}" title="Heavenly Influence">Heavenly Influence</a> - While the weather is currently Heavy Fog, deals 2x damage and skills type becomes Dark (also boosted by Heavy Fog's effect).</li>
<li><a href="{{ '/Dense_Fog_Bloom' | relative_url }}" title="Dense Fog Bloom">Dense Fog Bloom</a> - Works instantly during Heavy Fog.</li>
<li><a href="{{ '/Divine_Arrow' | relative_url }}" title="Divine Arrow">Divine Arrow</a> - Ignores the damage penalty of Heavy Fog</li></ul>

<h2><span>Abilities</span></h2>
<ul><li><a href="{{ '/Melancholic' | relative_url }}" title="Melancholic">Melancholic</a> - Sets Heavy Fog upon switching in, if not already active, for 5 turns, or 8 if holding a Almighty of Twilight Godstone.</li>
<li><a href="{{ '/Stargazer' | relative_url }}" title="Stargazer">Stargazer</a> - When using <a href="{{ '/Weather_Heavy_Fog' | relative_url }}" title="Weather Heavy Fog">Weather Heavy Fog</a>, Heavy Fog will be permanently applied to the field until end of battle, or forcibly changed/removed by a skill or ability. (<a href="{{ '/Speed_Renko' | relative_url }}" title="Speed Renko">Speed Renko</a> only)</li></ul>

<h3><span>Gain Effects when Heavy Fog is Active</span></h3>
<ul><li><a href="{{ '/Fog_Traveler' | relative_url }}" title="Fog Traveler">Fog Traveler</a> - While Heavy Fog is active, this puppets Speed is increased by 100%.</li>
<li><a href="{{ '/Surprise_Tactics' | relative_url }}" title="Surprise Tactics">Surprise Tactics</a> - While Heavy Fog is active, this puppets SpAtk is increased by 50%, but take 1/8th max HP damage at end of every turn.</li>
<li><a href="{{ '/Vanishing_Act' | relative_url }}" title="Vanishing Act">Vanishing Act</a> - While Heavy Fog is active, this puppets Evasion is increased by 20%</li>
<li><a href="{{ '/Boundary_Blurrer' | relative_url }}" title="Boundary Blurrer">Boundary Blurrer</a> - While any weather is active, this puppets FoAtk, FoDef, SpAtk, and SpDef are doubled (x2) for as long as the Weather is active. (<a href="{{ '/Power_Maribel' | relative_url }}" title="Power Maribel">Power Maribel</a> only)</li></ul>
</div>


<div id="Dust_Storm" class="tabcontent">
<h2><span>Effect</span></h2>
<p><b><a href="{{ '/Weather_Duststorm' | relative_url }}" title="Weather Duststorm">Dust Storm</a></b> functions identically to Sandstorm from Pokemon, doing 1/16th max HP to all puppets that aren't Steel or Earth type (or have immunity given by an ability) at the end of each turn.
</p>
<ul><li>This weather also seems to have a secondary effect that disables the Air Cushion abilities effect, allowing puppets with it to be hit by an Earth type skill, as well as take damage from entry hazards on switch-in, this however seems to have no effect on Wind Type puppets.</li></ul>

<h2><span>Skills</span></h2>
<h3><span>Change Weather to Duststorm</span></h3>
<ul><li><a href="{{ '/Weather_Duststorm' | relative_url }}" title="Weather Duststorm">Weather Duststorm</a> - Changes current weather to Duststorm, if not already active, for 5 turns (increases to 8 turns if holding an Almighty or Sand Godstone), if already active, the skill fails without reseting turn limit.</li>
<li><a href="{{ '/Realm_Gold' | relative_url }}" title="Realm Gold">Realm Gold</a> - Changes the current weather to Duststorm, and terrain to Kohryu for 5 turns, even if Duststorm or Kohryu are already active. Unaffected by Almighty of Sand Godstone, but can be reused while still active to reset the turn limit to 5.</li></ul>

<h3><span>Have Different Effects when Weather is Duststorm</span></h3>
<ul><li><a href="{{ '/Sunbeam_Dance' | relative_url }}" title="Sunbeam Dance">Sunbeam Dance</a> - While any Weather effect is currently active, except Clear, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Passing_Breeze' | relative_url }}" title="Passing Breeze">Passing Breeze</a> - While any Weather effect is currently active, except Clear, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Heavenly_Blessing' | relative_url }}" title="Heavenly Blessing">Heavenly Blessing</a> - While the weather is currently Duststorm, deals 2x damage and skills type becomes Earth.</li>
<li><a href="{{ '/Heavenly_Influence' | relative_url }}" title="Heavenly Influence">Heavenly Influence</a> - While the weather is currently Duststorm, deals 2x damage and skills type becomes Earth.</li></ul>

<h2><span>Abilities</span></h2>
<ul><li><a href="{{ '/Choleric' | relative_url }}" title="Choleric">Choleric</a> - Sets Duststorm upon switching in, if not already active, for 5 turns, or 8 if holding a Almighty of Sand Godstone.</li>
<li><a href="{{ '/Stargazer' | relative_url }}" title="Stargazer">Stargazer</a> - When using <a href="{{ '/Weather_Duststorm' | relative_url }}" title="Weather Duststorm">Weather Duststorm</a>, Duststorm will be permanently applied to the field until end of battle, or forcibly changed/removed by a skill or ability. (<a href="{{ '/Speed_Renko' | relative_url }}" title="Speed Renko">Speed Renko</a> only)</li></ul>

<h3><span>Gain Effects when Dust Storm is Active</span></h3>
<ul><li><a href="{{ '/Sand_Devil' | relative_url }}" title="Sand Devil">Sand Devil</a> - While Duststorm is active, this puppets Speed is increased by 100%, and is immune to the end of turn damage effect of Duststorm if not a Steel or Earth type.</li>
<li><a href="{{ '/Sand_Force' | relative_url }}" title="Sand Force">Sand Force</a> - While Duststorm is active, this puppets FoAtk is increased by 30%, and is immune to the end of turn damage effect of Duststorm if not a Steel or Earth type.</li>
<li><a href="{{ '/Sand_Mask' | relative_url }}" title="Sand Mask">Sand Mask</a> - While Duststorm is active, this puppets Evasion is increased by 20%, and is immune to the end of turn damage effect of Duststorm if not a Steel or Earth type.</li>
<li><a href="{{ '/Boundary_Blurrer' | relative_url }}" title="Boundary Blurrer">Boundary Blurrer</a> - While any weather is active, this puppets FoAtk, FoDef, SpAtk, and SpDef are doubled (x2) for as long as they are active. (<a href="{{ '/Power_Maribel' | relative_url }}" title="Power Maribel">Power Maribel</a> only)</li></ul>
</div>


<div id="Sunshower" class="tabcontent">
<h2><span>Effect</span></h2>
<p><b><a href="{{ '/Weather_Sunshower' | relative_url }}" title="Weather Sunshower">Sunshower</a></b> switches everyones base Focus Defense and Spread Defense stats (essentially Wonder Room from Pokemon).</p>
<ul><li>Only switches the base stats, and has no effect on modifiers, for example, if you have 200 FoDef, and 100 SpDef, with +2 in FoDef, it would swap the FoDef and SpDef, so that it is now 100 FoDef, and 200 SpDef, with the +2 staying in FoDef, which means you now have 200 in both because of the modifiers.</li></ul>

<h2><span>Skills</span></h2>
<h3><span>Change Weather to Sunshower</span></h3>
<ul><li><a href="{{ '/Weather_Sunshower' | relative_url }}" title="Weather Sunshower">Weather Sunshower</a> - Changes current weather to Sunshower, if not already active, for 5 turns (increases to 8 turns if holding an Almighty or Serein Godstone), if already active, the skill fails without reseting turn limit.</li>
<li><a href="{{ '/Realm_Black_Rain' | relative_url }}" title="Realm Black Rain">Realm Black Rain</a> - Changes the current weather to Sunshower, and terrain to Genbu for 5 turns, even if Sunshower or Genbu are already active. Unaffected by Almighty of Serein Godstone, but can be reused while still active to reset the turn limit to 5.</li></ul>

<h3><span>Have Different Effects when Weather is Sunshower</span></h3>
<ul><li><a href="{{ '/Sunbeam_Dance' | relative_url }}" title="Sunbeam Dance">Sunbeam Dance</a> - While any Weather effect is currently active, except Clear, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Passing_Breeze' | relative_url }}" title="Passing Breeze">Passing Breeze</a> - While any Weather effect is currently active, except Clear, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Heavenly_Blessing' | relative_url }}" title="Heavenly Blessing">Heavenly Blessing</a> - While the weather is currently Sunshower, deals 2x damage and skills type becomes Warped.</li>
<li><a href="{{ '/Heveanly_Influence' | relative_url }}" title="Heavenly Influence">Heavenly Influence</a> - While the weather is currently Sunshower, deals 2x damage and skills type becomes Warped.</li></ul>

<h2><span>Abilities</span></h2>
<ul><li><a href="{{ '/Supine' | relative_url }}" title="Supine">Supine</a> - Sets Sunshower upon switching in, if not already active, for 5 turns, or 8 if holding a Almighty of Serein Godstone.</li>
<li><a href="{{ '/Stargazer' | relative_url }}" title="Stargazer">Stargazer</a> - When using <a href="{{ '/Weather_Sunshower' | relative_url }}" title="Weather Sunshower">Weather Sunshower</a>, Sunshower will be permanently applied to the field until end of battle, or forcibly changed/removed by a skill or ability. (<a href="{{ '/Speed_Renko' | relative_url }}" title="Speed Renko">Speed Renko</a> only)</li></ul>

<h3><span>Gain Effects when Sunshower is Active</span></h3>
<ul><li><a href="{{ '/Divine_Festival' | relative_url }}" title="Divine Festival">Divine Festival</a> - While Sunshower, this puppet recovers from status conditions at the end of the turn.</li>
<li><a href="{{ '/Foxs_Wedding' | relative_url }}" title="Fox's Wedding">Fox's Wedding</a> - While Sunshower is active, this puppets Speed is increased by 100%.</li>
<li><a href="{{ '/Strange_Rainbow' | relative_url }}" title="Strange Rainbow">Strange Rainbow</a> - While Sunshower is active, this puppets FoAtk is increased by 30%.</li>
<li><a href="{{ '/Boundary_Blurrer' | relative_url }}" title="Boundary Blurrer">Boundary Blurrer</a> - While any weather is active, this puppets FoAtk, FoDef, SpAtk, and SpDef are doubled (x2) for as long as they are active. (<a href="{{ '/Power_Maribel' | relative_url }}" title="Power Maribel">Power Maribel</a> only)</li></ul>
</div>


<h2><span>Types of Terrain Effects</span></h2>
<div class="tab2">
 <div id="center">
  <button class="scroll-left" onclick="ScrollLeft2()"><i class="arrow arrow-left"></i></button>
  
  <button class="tablinks2" onclick="objectList2(event, 'Clear_(No_Terrain)')" id="defaultOpen2"><b>Clear (No Terrain)</b></button>
  <button class="tablinks2" onclick="objectList2(event, 'Seiryu')"><b>Seiryu</b></button>
  <button class="tablinks2" onclick="objectList2(event, 'Suzaku')"><b>Suzaku</b></button>
  <button class="tablinks2" onclick="objectList2(event, 'Byakko')"><b>Byakko</b></button>
  <button class="tablinks2" onclick="objectList2(event, 'Genbu')"><b>Genbu</b></button>
  <button class="tablinks2" onclick="objectList2(event, 'Kohryu')"><b>Kohryu</b></button>

  <button class="scroll-right" onclick="ScrollRight2()"><i class="arrow arrow-right"></i></button>
  </div>
</div>

<div id="Clear_(No_Terrain)" class="tabcontent2">
<h2><span>Effect</span></h2>
<p>Default Terrain, no additional effects.</p>

<h2><span>Skills</span></h2>
<h3><span>Change Terrain to Clear</span></h3>
<ul><li><a href="{{ '/Lost_Crisis' | relative_url }}" title="Lost Crisis">Lost Crisis</a> - While another Terrain effect is currently active, deals 2x damage, then sets terrain to Clear.</li>
<li><a href="{{ '/Desctruction_Rift' | relative_url }}" title="Destruction Rift">Destruction Rift</a> - While another Terrain effect is currently active, deals 2x damage, then sets terrain to Clear.</li></ul>

<h3><span>Have Different Effects when Terrain is Clear</span></h3>
<ul><li><a href="{{ '/Earthly_Blessing' | relative_url }}" title="Earthly Blessing">Earthly Blessing</a> - While no terrain is currently active, is treated as a normal attack.</li>
<li><a href="{{ '/Earthly_Influence' | relative_url }}" title="Earthly Influence">Earthly Influence</a> - While no terrain is currently active, is treated as a normal attack.</li></ul>

<h2><span>Abilities</span></h2>
There are no abilities that benefit from "Clear" terrain.
</div>


<div id="Seiryu" class="tabcontent2">
<h2><span>Effect</span></h2>
<p>When <b><a href="{{ '/Terrain_Seiryu' | relative_url }}" title="Terrain Seiryu">Seiryu</a></b> is in effect, the elemental affinity between Skills and Puppets becomes neutralized. This means that every skill that could previously damage a puppet will hit for neutral damage, as opposed to being super-effective or not very effective. Skills that had no compatibility to begin with will have no changes.</p>
<ul><li>Immunities, even those provided by abilities like Cloak of Darkness, will still apply during Seiryu.</li>
<li>Additionally, in the case of the ability Frail Health, Dream type moves are unaffected by Seiryu and will still ignore the ability.</li></ul>

<h2><span>Skills</span></h2>
<h3><span>Change Terrain to Seiryu</span></h3>
<ul><li><a href="{{ '/Terrain_Seiryu' | relative_url }}" title="Terrain Seiryu">Terrain Seiryu</a> - Changes current terrain to Seiryu, if not already active, for 5 turns, if already active, the skill fails without reseting turn limit.</li>
<li><a href="{{ '/Realm_Serenity' | relative_url }}" title="Realm Serenity">Realm Serenity</a> - Changes the current weather to Calm, and terrain to Seiryu for 5 turns, even if Calm or Seiryu are already active. Unaffected by Almighty of Silent Godstone, but can be reused while still active to reset the turn limit to 5.</li></ul>

<h3><span>Have Different Effects when Terrain is Seiryu</span></h3>
<ul><li><a href="{{ '/Lost_Crisis' | relative_url }}" title="Lost Crisis">Lost Crisis</a> - While any Terrain effect is currently active, except Clear, deals 2x damage, then sets terrain to Clear.</li>
<li><a href="{{ '/Destruction_Rift' | relative_url }}" title="Destruction Rift">Destruction Rift</a> - While any Terrain effect is currently active, except Clear, deals 2x damage, then sets terrain to Clear.</li>
<li><a href="{{ '/Earthly_Blessing' | relative_url }}" title="Earthly Blessing">Earthly Blessing</a> - While the terrain is currently Seiryu, deals 2x damage and skills type becomes Nature.</li>
<li><a href="{{ '/Earthly_Influence' | relative_url }}" title="Earthly Influence">Earthly Influence</a> - While the terrain is currently Seiryu, deals 2x damage and skills type becomes Nature.</li></ul>

<h2><span>Abilities</span></h2>
<ul><li><a href="{{ '/Timegazer' | relative_url }}" title="Timegazer">Timegazer</a> - When using <a href="{{ '/Terrain_Seiryu' | relative_url }}" title="Terrain Seiryu">Terrain Seiryu</a>, Seiryu will be set for 8 turns instead of 5. (<a href="{{ '/Assist_Renko' | relative_url }}" title="Assist Renko">Assist Renko</a> only)</li></ul>

<h3><span>Gain Effects when Seiryu is Active</span></h3>
<ul><li><a href="{{ '/Eastern_Expanse' | relative_url }}" title="Eastern Expanse">Eastern Expanse</a> - While the terrain is currently Seiryu, same-type skills are 33% stronger.Additionally, immunities are ignored by puppets with Eastern Expanse during Seiryu, where they are not normally.</li>
<li><a href="{{ '/Seiteis_Wood' | relative_url }}" title="Seitei's Wood">Seitei's Wood</a> - While the terrain is currently Seiryu, Nature skills are 50% more powerful and Steel-skill damage is halved.</li>
<li><a href="{{ '/Boundary_Savior' | relative_url }}" title="Boundary Savior">Boundary Savior</a> - While any terrain is active, this puppets FoDef, SpDef are doubled (x2). Also will recover from ailments and the opposing puppet will take 12.5% (1/8th) of their max HP at the end of each turn. (<a href="{{ '/Defense_Maribel' | relative_url }}" title="Defense Maribel">Defense Maribel</a> only)</li></ul>
</div>


<div id="Suzaku" class="tabcontent2">
<h2><span>Effect</span></h2>
<p>When <b><a href="{{ '/Terrain_Suzaku' | relative_url }}" title="Terrain Suzaku">Suzaku</a></b> is in effect, with some exceptions, the HP Restoration caused by Skills or Abilities is turned into damage.</p>
<ul><li>Turns all forms of healing into self-inflicted damage. You will also still receive damage from healing hold items and healing skills even if you are under the Weak status.</li>
<li>For interactions with moves/abilities and items, go to the <a href="{{ '/Terrain_Suzaku' | relative_url }}" title="Terrain Suzaku">Terrain Suzaku</a> page.</li></ul>

<h2><span>Skills</span></h2>
<h3><span>Change Terrain to Suzaku</span></h3>
<ul><li><a href="{{ '/Terrain_Suzaku' | relative_url }}" title="Terrain Suzaku">Terrain Suzaku</a> - Changes current terrain to Terrain Suzaku, if not already active, for 5 turns, if already active, the skill fails without reseting turn limit.</li>
<li><a href="{{ '/Realm_Scarlet_Mist' | relative_url }}" title="Realm Scarlet Mist">Realm Scarlet Mist</a> - Changes the current weather to Heavy Fog, and terrain to Suzaku for 5 turns, even if Heavy Fog or Suzaku are already active. Unaffected by Almighty of Twilight Godstone, but can be reused while still active to reset the turn limit to 5.</li></ul>

<h3><span>Have Different Effects when Terrain is Suzaku</span></h3>
<ul><li><a href="{{ '/Lost_Crisis' | relative_url }}" title="Lost Crisis">Lost Crisis</a> - While any Terrain effect is currently active, except Clear, deals 2x damage, then sets terrain to Clear.</li>
<li><a href="{{ '/Destruction_Rift' | relative_url }}" title="Destruction Rift">Destruction Rift</a> - While any Terrain effect is currently active, except Clear, deals 2x damage, then sets terrain to Clear.</li>
<li><a href="{{ '/Earthly_Blessing' | relative_url }}" title="Earthly Blessing">Earthly Blessing</a> - While the terrain is currently Suzaku, deals 2x damage and skills type becomes Fire.</li>
<li><a href="{{ '/Earthly_Influence' | relative_url }}" title="Earthly Influence">Earthly Influence</a> - While the terrain is currently Suzaku, deals 2x damage and skills type becomes Fire.</li></ul>

<h2><span>Abilities</span></h2>
<ul><li><a href="{{ '/Timegazer' | relative_url }}" title="Timegazer">Timegazer</a> - When using <a href="{{ '/Terrain_Suzaku' | relative_url }}" title="Terrain Suzaku">Terrain Suzaku</a>, Suzaku will be set for 8 turns instead of 5. (<a href="{{ '/Assist_Renko' | relative_url }}" title="Assist Renko">Assist Renko</a> only)</li></ul>

<h3><span>Gain Effects when Suzaku is Active</span></h3>
<ul><li><a href="{{ '/Southern_Expanse' | relative_url }}" title="Southern Expanse">Southern Expanse</a> - While the terrain is currently Suzaku, this puppet recovers 1/16th max HP at end of every turn, and is immune to Suzaku's effect.</li>
<li><a href="{{ '/Suteis Fire' | relative_url }}" title="Sutei's Fire">Sutei's Fire</a> - While the terrain is currently Suzaku, Fire skills are 50% more powerful and Water-skill damage is halved.</li>
<li><a href="{{ '/Boundary_Savior' | relative_url }}" title="Boundary Savior">Boundary Savior</a> - While any terrain is active, this puppets FoDef, SpDef are doubled (x2), will recover from ailments and the opposing puppet will take 12.5% (1/8th) of their max HP at the end of each turn. (<a href="{{ '/Defense_Maribel' | relative_url }}" title="Defense Maribel">Defense Maribel</a> only)</li></ul>
</div>


<div id="Byakko" class="tabcontent2">
<h2><span class="mw-headline" id="Effect">Effect</span></h2>
<p>When <b><a href="{{ '/Terrain_Byakko' | relative_url }}" title="Terrain Byakko">Byakko</a></b> is in effect, with some exceptions, Skills become 100% accurate, at the cost of Critical Hits and Protection moves being disabled. 
</p>
<ul><li>However, although this implies all skills will hit, One-Hit Knockout skills, such as <a href="{{ '/Perfect_Aim' | relative_url }}" title="Perfect Aim">Perfect Aim</a>, will still only have a 30% chance to hit the target, ignoring Byakko's effect.</li>
<li>It also causes skills to pierce through <a href="{{ '/Supernatural_Border' | relative_url }}" title="Supernatural Border">Supernatural Border</a> and <a href="{{ '/Thorned_Ivy' | relative_url }}" title="Thorned Ivy">Thorned Ivy</a>, dealing damage to the target despite being in a normally invulnerable state.</li></ul>

<h2><span>Skills</span></h2>
<h3><span>Change Terrain to Byakko</span></h3>
<ul><li><a href="{{ '/Terrain_Byakko' | relative_url }}" title="Terrain Byakko">Terrain Byakko</a> - Changes current terrain to Byakko, if not already active, for 5 turns, if already active, the skill fails without reseting turn limit.</li>
<li><a href="{{ '/Realm_Corona' | relative_url }}" title="Realm Corona">Realm Corona</a> - Changes the current weather to Aurora, and terrain to Byakko for 5 turns, even if Aurora or Byakko are already active. Unaffected by Almighty of Halo Godstone, but can be reused while still active to reset the turn limit to 5.</li></ul>

<h3><span>Have Different Effects when Terrain is Byakko</span></h3>
<ul><li><a href="{{ '/Lost_Crisis' | relative_url }}" title="Lost Crisis">Lost Crisis</a> - While any Terrain effect is currently active, except Clear, deals 2x damage, then sets terrain to Clear.</li>
<li><a href="{{ '/Destruction_Rift' | relative_url }}" title="Destruction Rift">Destruction Rift</a> - While any Terrain effect is currently active, except Clear, deals 2x damage, then sets terrain to Clear.</li>
<li><a href="{{ '/Earthly_Blessing' | relative_url }}" title="Earthly Blessing">Earthly Blessing</a> - While the terrain is currently Byakko, deals 2x damage and skills type becomes Steel.</li>
<li><a href="{{ '/Earthly_Influence' | relative_url }}" title="Earthly Influence">Earthly Influence</a> - While the terrain is currently Byakko, deals 2x damage and skills type becomes Steel.</li></ul>

<h2><span>Abilities</span></h2>
<ul><li><a href="{{ '/Timegazer' | relative_url }}" title="Timegazer">Timegazer</a> - When using <a href="{{ '/Terrain_Byakko' | relative_url }}" title="Terrain Byakko">Terrain Byakko</a>, Byakko will be set for 8 turns instead of 5. (<a href="{{ '/Assist_Renko' | relative_url }}" title="Assist Renko">Assist Renko</a> only)</li></ul>

<h3><span>Gain Effects when Byakko is Active</span></h3>
<ul><li><a href="{{ '/Western_Expanse' | relative_url }}" title="Western Expanse">Western Expanse</a> - While the terrain is currently Byakko, this puppet 100 acc skills power increases by 20%, no-miss skills power increases by 50%.</li>
<li><a href="{{ '/Byakuteis_Metal' | relative_url }}" title="Byakutei's Metal">Byakutei's Metal</a> - While the terrain is currently Byakko, Steel  skills are 50% more powerful and Fire-skill damage is halved.</li>
<li><a href="{{ '/Boundary_Savior' | relative_url }}" title="Boundary Savior">Boundary Savior</a> - While any terrain is active, this puppets FoDef, SpDef are doubled (x2), will recover from ailments and the opposing puppet will take 12.5% (1/8th) of their max HP at the end of each turn. (<a href="{{ '/Defense_Maribel' | relative_url }}" title="Defense Maribel">Defense Maribel</a> only)</li></ul>
</div>


<div id="Genbu" class="tabcontent2">
<h2><span>Effect</span></h2>
<p>While <b><a href="{{ '/Terrain_Genbu' | relative_url }}" title="Terrain Genbu">Genbu</a></b> is in effect, the turn order is reversed, and slower Puppets move first (essentially Trick Room from Pokemon).</p>
<ul><li>It's effect is based on the puppets current Speed stat, Skill Priority is unaffected, and higher priority skills will still go first, however on the chance of a Priority tie, the slower puppet will go first.</li></ul>

<h2><span>Skills</span></h2>
<h3><span>Change Terrain to Genbu</span></h3>
<ul><li><a href="{{ '/Terrain_Genbu' | relative_url }}" title="Terrain Genbu">Terrain Genbu</a> - Changes current terrain to Genbu, if not already active, for 5 turns, if already active, the skill fails without reseting turn limit.</li>
<li><a href="{{ '/Realm_Black_Rain' | relative_url }}" title="Realm Black Rain">Realm Black Rain</a> - Changes the current weather to Sunshower, and terrain to Genbu for 5 turns, even if Sunshower or Genbu are already active. Unaffected by Almighty of Serein Godstone, but can be reused while still active to reset the turn limit to 5.</li></ul>

<h3><span>Have Different Effects when Terrain is Genbu</span></h3>
<ul><li><a href="{{ '/Lost_Crisis' | relative_url }}" title="Lost Crisis">Lost Crisis</a> - While any Terrain effect is currently active, except Clear, deals 2x damage, then sets terrain to Clear.</li>
<li><a href="{{ '/Destruction_Rift' | relative_url }}" title="Destruction Rift">Destruction Rift</a> - While any Terrain effect is currently active, except Clear, deals 2x damage, then sets terrain to Clear.</li>
<li><a href="{{ '/Earthly_Blessing' | relative_url }}" title="Earthly Blessing">Earthly Blessing</a> - While the terrain is currently Genbu, deals 2x damage and skills type becomes Water.</li>
<li><a href="{{ '/Earthly_Influence' | relative_url }}" title="Earthly Influence">Earthly Influence</a> - While the terrain is currently Genbu, deals 2x damage and skills type becomes Water.</li></ul>

<h2><span>Abilities</span></h2>
<ul><li><a href="{{ '/Timegazer' | relative_url }}" title="Timegazer">Timegazer</a> - When using <a href="{{ '/Terrain_Genbu' | relative_url }}" title="Terrain Genbu">Terrain Genbu</a>, Genbu will be set for 8 turns instead of 5. (<a href="{{ '/Assist_Renko' | relative_url }}" title="Assist Renko">Assist Renko</a> only)</li></ul>

<h3><span>Gain Effects when Genbu is Active</span></h3>
<ul><li><a href="{{ '/Northern_Expanse' | relative_url }}" title="Northern Expanse">Northern Expanse</a> - While the terrain is currently Genbu, this puppet speed is halved.</li>
<li><a href="{{ '/Genteis_Water' | relative_url }}" title="Gentei's Water">Gentei's Water</a> - While the terrain is currently Genbu, Water skills are 50% more powerful and Earth-skill damage is halved.</li>
<li><a href="{{ '/Boundary_Savior' | relative_url }}" title="Boundary Savior">Boundary Savior</a> - While any terrain is active, this puppets FoDef, SpDef are doubled (x2), will recover from ailments and the opposing puppet will take 12.5% (1/8th) of their max HP at the end of each turn. (<a href="{{ '/Defense_Maribel' | relative_url }}" title="Defense Maribel">Defense Maribel</a> only)</li></ul>
</div>


<div id="Kohryu" class="tabcontent2">
<h2><span>Effect</span></h2>
<p>When <b><a href="{{ '/Terrain_Kohryu' | relative_url }}" title="Terrain Kohryu">Kohryu</a></b> This disables the effects of items and abilities. It disables the effect of all hold items, but how it interacts with abilities is a bit different. For examples, check the <a href="{{ '/Terrain_Kohryu' | relative_url }}" title="Terrain Kohryu">Terrain Kohryu</a> page.
</p>
<ul><li>Simulates effects of <a href="{{ '/Wasteful' | relative_url }}" title="Wasteful">Wasteful</a>, making user unable to use their hold items.</li>
<li>Disables effects of abilities that alter damage of skills, similar to <a href="{{ '/Ascertainment' | relative_url }}" title="Ascertainment">Ascertainment</a>.</li>
<li>Also ignores abilities that would otherwise interfere with your skills, such as <a href="{{ '/Frail_Health' | relative_url }}" title="Frail Health">Frail Health</a> and <a href="{{ '/Clock_of_Darkness' | relative_url }}" title="Cloak of Darkness">Cloak of Darkness</a>.</li></ul>

<h2><span>Skills</span></h2>
<h3><span>Change Terrain to Kohryu</span></h3>
<ul><li><a href="{{ '/Terrain_Kohryu' | relative_url }}" title="Terrain Kohryu">Terrain Kohryu</a> - Changes current weather to Kohryu, if not already active, for 5 turns, if already active, the skill fails without reseting turn limit.</li>
<li><a href="{{ '/Realm_Gold' | relative_url }}" title="Realm Gold">Realm Gold</a> - Changes the current weather to Duststorm, and terrain to Kohryu for 5 turns, even if Duststorm or Kohryu are already active. Unaffected by Almighty of Sand Godstone, but can be reused while still active to reset the turn limit to 5.</li></ul>

<h3><span>Have Different Effects when Terrain is Kohryu</span></h3>
<ul><li><a href="{{ '/Lost_Crisis' | relative_url }}" title="Lost Crisis">Lost Crisis</a> - While any Terrain effect is currently active, except Clear, deals 2x damage, then sets terrain to Clear.</li>
<li><a href="{{ '/Destruction_Rift' | relative_url }}" title="Destruction Rift">Destruction Rift</a> - While any Terrain effect is currently active, except Clear, deals 2x damage, then sets terrain to Clear.</li>
<li><a href="{{ '/Earthly_Blessing' | relative_url }}" title="Earthly Blessing">Earthly Blessing</a> - While the terrain is currently Kohryu, deals 2x damage and skills type becomes Earth.</li>
<li><a href="{{ '/Earthly_Influence' | relative_url }}" title="Earthly Influence">Earthly Influence</a> - While the terrain is currently Kohryu, deals 2x damage and skills type becomes Earth.</li></ul>

<h2><span>Abilities</span></h2>
<ul><li><a href="{{ '/Timegazer' | relative_url }}" title="Timegazer">Timegazer</a> - When using <a href="{{ '/Terrain_Kohryu' | relative_url }}" title="Terrain Kohryu">Terrain Kohryu</a>, Kohryu will be set for 8 turns instead of 5. (<a href="{{ '/Assist_Renko' | relative_url }}" title="Assist Renko">Assist Renko</a> only)</li></ul>

<h3><span>Gain Effects when Seiryu is Kohryu</span></h3>
<ul><li><a href="{{ '/Central_Expanse' | relative_url }}" title="Central Expanse">Central Expanse</a> - While the terrain is currently Kohryu, this puppet skills ignore the foe's ability. The user may also use held items and has <a href="{{ '/Quick_Eye' | relative_url }}" title="Quick Eye">Quick Eye.</a></li>
<li><a href="{{ '/Kouteis_Earth' | relative_url }}" title="Koutei's Earth">Koutei's Earth</a> - While the terrain is currently Kohryu, Earth skills are 50% more powerful and Nature-skill damage is halved.</li>
<li><a href="{{ '/Boundary_Savior' | relative_url }}" title="Boundary Savior">Boundary Savior</a> - While any terrain is active, this puppets FoDef, SpDef are doubled (x2), will recover from ailments and the opposing puppet will take 12.5% (1/8th) of their max HP at the end of each turn. (<a href="{{ '/Defense_Maribel' | relative_url }}" title="Defense Maribel">Defense Maribel</a> only)</li></ul>
</div>
