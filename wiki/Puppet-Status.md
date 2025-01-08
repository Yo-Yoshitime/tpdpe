<h1>Puppet Status</h1>
 
<p>There are several Puppet ailments in Touhou Puppet Dance Performance, most of which are flat out derived from the Pokemon games. Some, however, have been tweaked a bit, and some others are entirely new.</p>

<p>All Puppets have two status slots, allowing them to have two one-slot status conditions at once, such as Poison and Burn. However, statuses like Heavy Poison and Heavy Burn use two status slots, preventing the afflicted Puppet from being inflicted with further status conditions until cured through an <a href="/Items" title="Items">item</a>, <a href="/Skills" title="Skills">skill</a>, or <a href="/Abilities" title="Abilities">ability</a>.</p>

<p>Some types, such as <a href="/Fire" title="Fire">Fire</a> and <a href="/Poison" title="Poison">Poison</a> have innate status immunity under normal conditions (listed on the <a href="/Type_Chart" title="Type Chart">Type Chart</a> page), <a href="/Resonance" title="Resonance">Resonance</a> bypasses this immunity if a status is passed on to the aforementioned types. Further immunities are listed under the respective status condition.</p>

<p>Additionally, if a Puppet is trapped (either via <a href="/Abilities" title="Abilities">Ability</a> or <a href="/Skills" title="Skills">Skill</a>), they will still be able to switch out with Pivoting moves such as <a href="/Changeling" title="Changeling">Changeling</a> or <a href="/Lightning_Speed" title="Lightning Speed">Lightning Speed</a>, as well as being hit while holding the Retreat Manual item or attacking a Puppet holding the Eviction Notice item. Puppets with the <a href="/Peaceful" title="Peaceful">Peaceful</a> ability or Puppets that are <a href="/Nether" title="Nether">Nether</a>-type are able to ignore this restriction and switch regardless of the trapping method, even if it is self-inflicted, unless the Puppet is trapped through the <a href="/Restraint" title="Restraint">Restraint</a> ability.
</p>

<h2><span>Status Effects</span></h2>


<div class="tab">
  <button class="tablinks" onclick="statusList(event, 'Poison')">Poison</button>
  <button class="tablinks" onclick="statusList(event, 'Heavy_Poison')">Heavy Poison</button>
  <button class="tablinks" onclick="statusList(event, 'Burn')">Burn</button>
   <button class="tablinks" onclick="statusList(event, 'Heavy_Burn')">Heavy Burn</button>
  <button class="tablinks" onclick="statusList(event, 'Stopped')">Stopped</button>
  <button class="tablinks" onclick="statusList(event, 'Darkness')">Darkness</button>
   <button class="tablinks" onclick="statusList(event, 'Fear')">Fear</button>
  <button class="tablinks" onclick="statusList(event, 'Paralyze')">Paralyze</button>
  <button class="tablinks" onclick="statusList(event, 'Shocked')">Shocked</button>
   <button class="tablinks" onclick="statusList(event, 'Weakness')">Weakness</button>
  <button class="tablinks" onclick="statusList(event, 'Heavy_Weakness')">Heavy Weakness</button>
</div>


<div id="Poison" class="tabcontent">
<p>Deals 1/8th HP at the end of every turn. Poison and Steel Types are immune to this condition.
<br>Uses one slot.</p>
</div>

<div id="Heavy_Poison" class="tabcontent">
<p>Deals damage at the ending of every turn. The damage increases by 1/16th each turn. Causing the Poison status on something that is already Poisoned will turn it into Heavy Poison. Poison and Steel Types are immune to this condition.
<br>Uses two slots.</p></article>
</div>

<div id="Burn" class="tabcontent">
<p>Deals 1/8th HP at the end of every turn. Fire Types are immune to this condition.
<br>Uses one slot.</p></article>
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
<p>Prevents the use of Skills that recover HP, but Items that restore HP can still be used. Skills that drain the opponent's HP will still deal damage, but will not heal the user. In addition, every skill usage will consume 2 SP, similar to when the opposing puppet has the ability <a href="/wiki/Unjustness" title="Unjustness">Unjustness</a> (also stacks with the abilities effect to drain 3 SP). Causing the Weakness status on something that is already Weak will turn it into Heavy Weakness.
<br>Uses two slots.</p>
</div>


<script>
function statusList(evt, Status) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Status).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>
