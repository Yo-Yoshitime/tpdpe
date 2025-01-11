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
<h2><span>Moves</span></h2>
<h3><span><b>Change Weather to Clear</b></span></h3>
<ul><li><a href="{{ '/Sunbeam_Dance' | relative_url }}" title="Sunbeam Dance">Sunbeam Dance</a> - While another Weather effect is currently active, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Passing_Breeze' | relative_url }}" title="Passing Breeze">Passing Breeze</a> - While another Weather effect is currently active, deals 2x damage, then sets weather to Clear.</li></ul>
<h3><span><b>Have Different Effects when Weather is Clear</b></span></h3>
<ul><li><a href="{{ '/Heavenly_Blessing' | relative_url }}" title="Heavenly Blessing">Heavenly Blessing</a> - While no weather is currently active, is treated as a normal attack.</li>
<li><a href="{{ '/Heveanly_Influence' | relative_url }}" title="Heavenly Influence">Heavenly Influence</a> - While no weather is currently active, is treated as a normal attack.</li></ul>
<h2><span>Abilities</span></h2>
<p>There are no abilities that set, or benefit from "Clear" weather, however-
</p>
<ul><li><a href="{{ '/Weather_Resist' | relative_url }}" title="Weather Resist">Weather Resist</a> - While a puppet with this ability is on the field, the current Weather is treated as Clear, while not actually changing the weather.<p class="mw-empty-elt"></p></li></ul>
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
<h3><span><b>Change Weather to Calm</b></span></h3>
<ul><li><a href="{{ '/Weather_Calm' | relative_url }}" title="Weather Calm">Weather Calm</a> - Changes current weather to Calm, if not already active, for 5 turns (increases to 8 turns if holding an Almighty or Silent Godstone), if already active, the skill fails without reseting turn limit.</li>
<li><a href="{{ '/Realm_Serenity' | relative_url }}" title="Realm Serenity">Realm Serenity</a> - Changes the current weather to Calm, and terrain to Seiryu for 5 turns, even if Calm or Seiryu are already active. Unaffected by Almighty of Silent Godstone, but can be reused while still active to reset the turn limit to 5.</li></ul>
<h3><span><b>Have Different Effects when Weather is Calm</b></span></h3>
<ul><li><a href="{{ '/Sunbeam_Dance' | relative_url }}" title="Sunbeam Dance">Sunbeam Dance</a> - While any Weather effect is currently active, except Clear, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Passing_Breeze' | relative_url }}" title="Passing Breeze">Passing Breeze</a> - While any Weather effect is currently active, except Clear, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Heavenly_Blessing' | relative_url }}" title="Heavenly Blessing">Heavenly Blessing</a> - While the weather is currently Calm, deals 2x damage and skills type becomes Wind.</li>
<li><a href="{{ '/Heavenly_Influence' | relative_url }}" title="Heavenly Influence">Heavenly Influence</a> - While the weather is currently Calm, deals 2x damage and skills type becomes Wind.</li></ul>
<h2><span>Abilities</span></h2>
<ul><li><a href="{{ '/Phlegmatic' | relative_url }}" title="Phlegmatic">Phlegmatic</a> - Sets Calm upon switching in, if not already active, for 5 turns, or 8 if holding a Almighty of Silent Godstone.</li>
<li><a href="{{ '/Stargazer' | relative_url }}" title="Stargazer">Stargazer</a> - When using <a href="/wiki/{{ '/Weather_Calm' | relative_url }}" title="Weather Calm">Weather Calm</a>, Calm will be permanently applied to the field until end of battle, or forcibly changed/removed by a skill or ability. (<a href="{{ '/Speed_Renko' | relative_url }}" title="Speed Renko">Speed Renko</a> only)</li></ul>
<h3><span><b>Gain Effects when Calm is Active</b></span></h3>
<ul><li><a href="{{ '/Breather' | relative_url }}" title="Breather">Breather</a> - While Calm is active, this puppets FoDef is increased by 50%, and recover 1/16th max HP at end of every turn.</li>
<li><a href="{{ '/Economist' | relative_url }}" title="Economist">Economist</a> - While Calm is active, once per turn, this puppets Hold Item 1 is recycled at the end of the turn at a 100% rate, if the weather is <b>not</b> Calm, the frequency of activation is dropped to only 50% chance.</li>
<li><a href="{{ '/Recalibration' | relative_url }}" title="Recalibration">Recalibration</a> - While Calm is active, this puppet's SpAtk and SpDef are increased by 50%</li>
<li><a href="{{ '/Zen' | relative_url }}" title="Zen">Zen</a> - While Calm is active, this puppet is immune to status effects (Poisoned, Burned, etc.), and recover 1/16th max HP at end of every turn.</li>
<li><a href="{{ '/Boundary_Blurrer' | relative_url }}" title="Boundary Blurrer">Boundary Blurrer</a> - While any weather is active, this puppets FoAtk, FoDef, SpAtk, and SpDef are doubled (x2) for as long as they are active. (<a href="{{ '/Power_Maribel' | relative_url }}" title="Power Maribel">Power Maribel</a> only)<p class="mw-empty-elt"></p></li></ul>
</div>

<div id="Aurora" class="tabcontent">
<h2><span>Effect</span></h2>
<p><b><a href="{{ '/Weather_Aurora' | relative_url }}" title="Weather Aurora">Aurora</a></b> increases the damage of Light-type skills by +50%, and halves (-50%) the damage of Dark-type skills.
</p>
<h2><span>Skills</span></h2>
<h3><span><b>Change Weather to Aurora</b></span></h3>
<ul><li><a href="{{ '/Weather_Aurora' | relative_url }}" title="Weather Aurora">Weather Aurora</a> - Changes current weather to Aurora, if not already active, for 5 turns (increases to 8 turns if holding an Almighty or Halo Godstone), if already active, the skill fails without reseting turn limit.</li>
<li><a href="{{ '/Realm_Corona' | relative_url }}" title="Realm Corona">Realm Corona</a> - Changes the current weather to Aurora, and terrain to Byakko for 5 turns, even if Aurora or Byakko are already active. Unaffected by Almighty of Halo Godstone, but can be reused while still active to reset the turn limit to 5.</li></ul>
<h3><span><b>Have Different Effects when Weather is Aurora</b></span></h3>
<ul><li><a href="{{ '/Sunbeam_Dance' | relative_url }}" title="Sunbeam Dance">Sunbeam Dance</a> - While any Weather effect is currently active, except Clear, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Passing_Breeze' | relative_url }}" title="Passing Breeze">Passing Breeze</a> - While any Weather effect is currently active, except Clear, deals 2x damage, then sets weather to Clear.</li>
<li><a href="{{ '/Heavenly_Blessing' | relative_url }}" title="Heavenly Blessing">Heavenly Blessing</a> - While the weather is currently Aurora, deals 2x damage and skills type becomes Light (also boosted by Aurora's effect).</li>
<li><a href="{{ '/Heavenly_Influence' | relative_url }}" title="Heavenly Influence">Heavenly Influence</a> - While the weather is currently Aurora, deals 2x damage and skills type becomes Light (also boosted by Aurora's effect).</li></ul>
<h2><span>Abilities</span></h2>
<ul><li><a href="{{ '/Sanguine' | relative_url }}" title="Sanguine">Sanguine</a> - Sets Aurora upon switching in, if not already active, for 5 turns, or 8 if holding a Almighty of Halo Godstone.</li>
<li><a href="{{ '/Stargazer' | relative_url }}" title="Stargazer">Stargazer</a> - When using <a href="{{ '/Weather_Aurora' | relative_url }}" title="Weather Aurora">Weather Aurora</a>, Aurora will be permanently applied to the field until end of battle, or forcibly changed/removed by a skill or ability. (<a href="{{ '/Speed_Renko' | relative_url }}" title="Speed Renko">Speed Renko</a> only)</li></ul>
<h3><span><b>Gain Effects when Aurora is Active</b></span></h3>
<ul><li><a href="{{ '/Aurora_Grace' | relative_url }}" title="Aurora Grace">Aurora Grace</a> - While Aurora is active, this puppets SpDef is increased by 50%, and recover 1/16th max HP at end of every turn.</li>
<li><a href="{{ '/Flash' | relative_url }}" title="Flash">Flash</a> - While Aurora is active, this puppets Speed is increased by 100%.</li>
<li><a href="{{ '/Light_Curtain' | relative_url }}" title="Light Curtain">Light Curtain</a> - While Aurora is active, this puppet is immune to Confusion, and recovers from status ailments at the end of the turn.</li>
<li><a href="{{ '/Boundary_Blurrer' | relative_url }}" title="Boundary Blurrer">Boundary Blurrer</a> - While any weather is active, this puppets FoAtk, FoDef, SpAtk, and SpDef are doubled (x2) for as long as they are active. (<a href="{{ '/Power_Maribel' | relative_url }}" title="Power Maribel">Power Maribel</a> only)<p class="mw-empty-elt"></p></li></ul></article>
</div>

<div id="Heavy_Fog" class="tabcontent">
</div>

<div id="Dust_Storm" class="tabcontent">
</div>

<div id="Sunshower" class="tabcontent">
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
</div>

<div id="Seiryu" class="tabcontent2">
</div>

<div id="Suzaku" class="tabcontent2">
</div>

<div id="Byakko" class="tabcontent2">
</div>

<div id="Genbu" class="tabcontent2">
</div>

<div id="Kohryu" class="tabcontent2">
</div>
