var confirmJailbreak = true;
function jb_finished()
{
    if(main_ret == 179 || main_ret == 0){
	alert("Félicitation Jailbreak réussis! L'étape suivante est de cliquer sur 'MIRA + HEN'");
    } else{
        alert("Echec du Jailbreak! Pas de Panic, redémarrer votre PS4 et réessayer.");
    }
}

function mira_finished()
{
	setTimeout(function(){alert("Tout est OK, Merci Jailbreak-Newtane-Games!! vous pouvez jouer à tous les jeux gratuitement maintenant\n Bon jeux les gamers!!"); }, 8000);
}

function payload_finished()
{
    alert("Chargement réussis!!");
}

function SC(x)
{
    return '<script src="'+x+'.js"></scr'+'ipt>';
}

function MIRA(x)
{
    return SC('mira/'+x);
}

function JB(x)
{
    return SC('jb/'+x);
}

function PAYLOAD(x)
{
    return SC('payloads/'+x);
}

function load_mira()
{
    document.write(MIRA('mira')+MIRA('mira2')+MIRA('c-code')+'<script>mira_finished();</scr'+'ipt>');
}

function load_mira_nohb()
{
    document.write(MIRA('mira')+MIRA('miranohb')+MIRA('c-code')+'<script>mira_finished();</scr'+'ipt>');
}

function load_JB()
{	
	confirmJailbreak = confirm("Bienvenue sur le Jailbreak de Newtane Games, devrions-nous commencer?\nNote: Cliquez sur 'Annuler' si votre PS4 a déjà été Jailbreaké au démarrage!")
	if(confirmJailbreak){
		document.write(JB('c-code')+'<script>jb_finished();</scr'+'ipt>');
	}
}

function load_netcat()
{
    document.write(MIRA('c-code')+'<script>alert("Attente du Payload !!");</scr'+'ipt>');
}

function load_payload(payload)
{
    document.write(PAYLOAD('mira')+PAYLOAD(payload)+PAYLOAD('c-code')+'<script>payload_finished();</scr'+'ipt>');
}
