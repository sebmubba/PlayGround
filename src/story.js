// THE HOLLOW CLOCK — story graph
// Every node is serialisable except `branch.when` predicates and route labels.
// Node types: chapter | line | choice | qte | explore | scene | branch | fx | end

const L = (who, text, next, extra = {}) => ({ t: 'line', who, text, next, ...extra });
const N = (text, next, extra = {}) => L('', text, next, { narrator: true, ...extra });

export const story = {
  start: 'chapter1',
  version: 4,

  nodes: {
    /* ══════════════════ CHAPTER I — THE HOUSE ON MAPLE STREET ══════════════════ */

    chapter1: {
      t: 'chapter', numeral: 'I', title: 'THE HOUSE ON MAPLE STREET',
      sub: 'HAWKINS, INDIANA — MARCH 21, 1986',
      scene: 'exterior', shot: 'establish', time: '3:04 AM', objective: 'Find Dana.',
      next: 'c1_01', checkpoint: true
    },

    c1_01: N('One year ago, the earth opened under Hawkins and swallowed nine houses whole.', 'c1_02', { shot: 'establish', signal: 1 }),
    c1_02: N('The news called it a sinkhole. The town called it the Quake. Nobody called it what it was.', 'c1_03', { shot: 'approach', signal: 1 }),
    c1_03: N('Tonight, the ash still falls like dirty snow. And Dana has walked back into the house that started it all.', 'c1_04', { shot: 'porch' }),
    c1_04: L('SAM', 'She came in here? Ryan, this place has been condemned since the Quake. There are birds living in the walls.', 'c1_05', { shot: 'group' }),
    c1_05: L('RYAN', 'Her shoes are on the porch. Both of them. She never takes them off.', 'c1_06', { shot: 'porch' }),
    c1_06: L('SAM', 'It\'s 3:04 in the morning. Why is it always 3:04?', 'c1_choice_entry', { shot: 'window', signal: 2 }),
    c1_choice_entry: {
      t: 'choice', prompt: 'The front door is swollen shut. Dana is somewhere inside.',
      timer: 11, defaultIndex: 0,
      options: [
        { label: 'Kick the door in. Get her out.', sub: 'Make noise. Make it fast.', set: { entry: 'loud', dana: 1 }, next: 'c1_loud_1' },
        { label: 'Slip in quiet. Don\'t spook her.', sub: 'She is sleepwalking. She will not recognise you.', set: { entry: 'quiet', dana: 1 }, next: 'c1_quiet_1' }
      ]
    },
    c1_loud_1: N('The door gives on the third kick. The sound rolls through the empty house like a gunshot.', 'c1_loud_2', { shot: 'door', shake: 0.5 }),
    c1_loud_2: L('SAM', 'Subtle. Very subtle. I\'m sure whatever\'s in there loves guests.', 'c1_foyer_1', { shot: 'wide' }),
    c1_quiet_1: N('You ease the door open with your shoulder. The hinges make a sound like a small animal being stepped on.', 'c1_quiet_2', { shot: 'door' }),
    c1_quiet_2: L('SAM', 'If she\'s sleepwalking, don\'t wake her. In the movies, waking them is how everybody dies.', 'c1_foyer_1', { shot: 'wide' }),

    c1_foyer_1: {
      t: 'scene', scene: 'foyer', shot: 'wide', time: '3:05 AM', objective: 'Search the foyer.',
      next: 'c1_foyer_2'
    },
    c1_foyer_2: N('The house exhales. Dust turns slowly in the beam of your flashlight, and somewhere above you, a floorboard creaks under a foot that weighs nothing at all.', 'c1_foyer_3', { shot: 'wide' }),
    c1_foyer_3: L('SAM', 'There\'s no power. So why does it smell like candles?', 'c1_foyer_4', { shot: 'hall' }),
    c1_foyer_4: {
      t: 'line', who: 'WREN', text: 'Because I lit them.', next: 'c1_foyer_5',
      shot: 'wren', signal: 3
    },
    c1_foyer_5: L('SAM', 'Jesus— how long have you been standing there?', 'c1_foyer_6', { shot: 'wren' }),
    c1_foyer_6: L('WREN', 'Long enough. You\'re late.', 'c1_foyer_7', { shot: 'wren' }),
    c1_foyer_7: L('RYAN', 'Where\'s Dana?', 'c1_foyer_8', { shot: 'wren' }),
    c1_foyer_8: L('WREN', 'Upstairs. Dreaming with her eyes open. She touched the clock, Ryan. He saw her.', 'c1_foyer_9', { shot: 'clock', signal: 4 }),
    c1_foyer_9: L('WREN', 'Look around. But do not touch the clock. I mean it.', 'c1_explore', { shot: 'wide', objective: 'Find three signs of what happened here.' }),

    c1_explore: {
      t: 'explore',
      scene: 'foyer', shot: 'explore',
      prompt: 'Search the foyer',
      hotspots: ['creel_photo', 'wall_scratches', 'clock_face', 'candles'],
      required: 3,
      objective: 'Search the foyer.',
      next: 'c1_explore_done'
    },
    c1_explore_done: N('Behind you, the grandfather clock clears its throat.', 'c1_touch_1', { shot: 'clock', sfx: 'clock_chime', shake: 0.35, signal: 4 }),
    c1_touch_1: L('WREN', 'Ryan. Don\'t—', 'c1_touch_2', { shot: 'clock' }),
    c1_touch_2: N('The hands are frozen at 3:07. You reach out before you decide to. The glass is warm, like skin.', 'c1_qte_break', { shot: 'clock_close', signal: 4 }),

    c1_qte_break: {
      t: 'qte', kind: 'press', key: 'e', window: 1700,
      prompt: 'SOMETHING HAS YOUR WRIST', hint: 'BREAK FREE',
      success: 'c1_break_ok', fail: 'c1_break_fail', failSet: { dana: -1 }
    },
    c1_break_ok: N('You tear your hand back. A black handprint blooms under your skin, then fades. The clock face cracks from three to seven.', 'c1_break_after', { shot: 'clock_close', shake: 0.6, sfx: 'impact' }),
    c1_break_fail: N('Fingers of cold smoke close around your wrist. You feel something lean close and breathe in, like you are a door left open. The clock lets go. It does not need you. Yet.', 'c1_break_after', { shot: 'clock_close', shake: 0.8, sfx: 'impact', damage: true }),
    c1_break_after: L('WREN', 'It knows your name now. That was either very brave or very stupid.', 'c1_upstairs', { shot: 'wren', signal: 3 }),
    c1_upstairs: N('From the top of the stairs, a girl\'s voice, flat as a recording: "Three. Oh. Seven."', 'c1_dana_top', { shot: 'stairs', sfx: 'whisper', signal: 4 }),
    c1_dana_top: L('DANA', 'Ryan. You came.', 'chapter2', { shot: 'dana_stairs' }),

    /* ══════════════════ CHAPTER II — THE SIGNAL ══════════════════ */

    chapter2: {
      t: 'chapter', numeral: 'II', title: 'THE SIGNAL',
      sub: '3:06 AM — THE HOUSE ON MAPLE STREET',
      scene: 'bedroom', time: '3:06 AM', objective: 'Wake Dana.',
      next: 'c2_01', checkpoint: true
    },

    c2_01: N('Dana is standing at the window in her nightgown, toes curled against the cold floor. Her eyes are open. They are not looking at anything.', 'c2_02', { shot: 'dana_window', signal: 3 }),
    c2_02: L('DANA', 'Three... oh... seven... three... oh... seven...', 'c2_03', { shot: 'dana_close', sfx: 'whisper' }),
    c2_03: L('WREN', 'He marked her in the foyer. The clock is his door. At 3:07 he opens it and takes what he wants.', 'c2_04', { shot: 'wren' }),
    c2_04: L('SAM', 'Okay. I\'m going to say the thing nobody\'s saying. What is "he"?', 'c2_choice_response', { shot: 'sam' }),

    c2_choice_response: {
      t: 'choice', prompt: 'Dana whispers your name like it is a question.',
      timer: 10, defaultIndex: 0,
      options: [
        { label: '"I\'m here now, Dana. I\'m not going anywhere."', sub: 'She needs her brother.', set: { dana: 2, honest: true }, next: 'c2_resp_here' },
        { label: '"You have to wake up. Right now."', sub: 'Shake her out of it.', set: { dana: 0, stern: true }, next: 'c2_resp_wake' },
        { label: 'Say nothing. Let Wren work.', sub: 'You are afraid of what she will hear in your voice.', set: { wren: 1, quiet: true }, next: 'c2_resp_silent' }
      ]
    },
    c2_resp_here: L('DANA', 'You said that at the funeral, too.', 'c2_05', { shot: 'dana_close', shake: 0.2 }),
    c2_resp_wake: L('DANA', 'Wake up? Ryan, I\'m the only one here who\'s awake.', 'c2_05', { shot: 'dana_close', shake: 0.4 }),
    c2_resp_silent: N('You say nothing. Wren glances at you, and for one second she looks almost disappointed.', 'c2_05', { shot: 'wren' }),
    c2_05: L('WREN', 'His name is the Hollow Man. He lives in the space between seconds. He feeds on people who are running from something they can\'t outrun.', 'c2_06', { shot: 'wren' }),
    c2_06: L('WREN', 'He doesn\'t kill them. He keeps them. Like photographs in a drawer.', 'c2_07', { shot: 'dana_close' }),
    c2_07: L('SAM', 'And the clock?', 'c2_08', { shot: 'sam' }),
    c2_08: L('WREN', 'The clock is the door. At 3:07 he crosses. We have one minute.', 'c2_09', { shot: 'wren' }),
    c2_09: L('SAM', 'It\'s 3:06.', 'c2_choice_record', { shot: 'sam', signal: 4 }),

    c2_choice_record: {
      t: 'choice', prompt: 'Music is the only thing that anchors a marked soul. What do you put on the record player?',
      timer: 12, defaultIndex: 0,
      options: [
        { label: '"Static Bloom" — Dana\'s favourite.', sub: 'She knows every word.', set: { record: 'static', dana: 2 }, next: 'c2_rec_static' },
        { label: 'Wren\'s mixtape. The one she made for the dark.', sub: 'Wren wrote every note for a night like this.', set: { record: 'wren', wren: 2 }, next: 'c2_rec_mixtape' },
        { label: 'The tape in your jacket. Jonah\'s tape.', sub: 'You have not played it since the Quake.', set: { record: 'jonah', dana: 1, jonah: 1 }, next: 'c2_rec_brother' }
      ]
    },
    c2_rec_static: L('SAM', 'Dana\'s favourite. Of course. The song about not letting the lights take you.', 'c2_qte_music', { shot: 'record' }),
    c2_rec_mixtape: L('WREN', 'You kept it?', 'c2_qte_music', { shot: 'wren' }),
    c2_rec_brother: N('Jonah\'s handwriting on the label: FOR RYAN, WHEN IT GETS DARK. YOU OWE ME A SLUSHIE.', 'c2_qte_music', { shot: 'record', shake: 0.3 }),

    c2_qte_music: {
      t: 'qte', kind: 'mash', key: 'space', window: 3400, target: 15,
      prompt: 'THE RECORD IS SLIPPING', hint: 'MASH SPACE TO KEEP IT SPINNING',
      success: 'c2_music_ok', fail: 'c2_music_fail'
    },
    c2_music_ok: N('The needle catches. The room fills with drums and a woman singing about running. Dana\'s feet leave the floor. She rises six inches and hangs there, hair weightless, while Wren whispers something that makes the lamps flicker.', 'c2_10', { shot: 'dana_levitate', signal: 4 }),
    c2_music_fail: N('The record jumps. For half a second there is only static, and inside the static, a man\'s voice says your name. Dana\'s nose begins to bleed. You slam the needle back down.', 'c2_10', { shot: 'dana_levitate', damage: true, signal: 4 }),
    c2_10: N('Dana drops to her knees. The music stops. The clock on her nightstand says 3:06.', 'c2_11', { shot: 'dana_floor' }),
    c2_11: L('DANA', 'He showed me the door, Ryan. It\'s under the quarry. It\'s been open this whole time.', 'c2_12', { shot: 'dana_close' }),
    c2_12: L('DANA', 'Jonah was there. I heard him. He said you left him.', 'c2_13', { shot: 'ryan_close', shake: 0.35 }),
    c2_13: L('WREN', 'The Hollow Man wears the dead. He puts them on like coats. Don\'t believe anything he says with your brother\'s mouth.', 'c2_14', { shot: 'wren' }),
    c2_14: L('SAM', 'The quarry. My scanner picks up a signal there every night at 3:07. I thought it was a busted amplifier.', 'c2_choice_sam', { shot: 'sam' }),

    c2_choice_sam: {
      t: 'choice', prompt: 'The quarry is three miles of dark and flooded tunnels. Sam is already reaching for his camera.',
      timer: 12, defaultIndex: 0,
      options: [
        { label: 'Bring Sam. You\'ll need the camera.', sub: 'He is scared. He is coming anyway.', set: { broughtSam: true, sam: 2 }, next: 'c2_sam_bring' },
        { label: 'Make Sam stay with Dana.', sub: 'If the clock opens here, she cannot be alone.', set: { broughtSam: false, dana: 2, sam: -1 }, next: 'c2_sam_stay' }
      ]
    },
    c2_sam_bring: L('SAM', 'I\'m not staying behind. If this is the last tape I ever shoot, it\'s going to have a good third act.', 'chapter3', { shot: 'sam', signal: 3 }),
    c2_sam_stay: L('SAM', 'Fine. But if you die, I\'m telling everyone you cried at the end of E.T.', 'chapter3', { shot: 'sam' }),

    /* ══════════════════ CHAPTER III — THE QUARRY ══════════════════ */

    chapter3: {
      t: 'chapter', numeral: 'III', title: 'THE QUARRY',
      sub: '3:06 AM — THREE MILES OUTSIDE HAWKINS',
      scene: 'quarry', time: '3:06 AM', objective: 'Reach the gate.',
      next: 'c3_01', checkpoint: true
    },

    c3_01: N('The rain comes down in sheets. The quarry road ends where the guardrail used to be. Below, black water swallows the light from your flashlights whole.', 'c3_02', { shot: 'wide', signal: 3 }),
    c3_02: L('WREN', 'They dug too deep here in \'59. Found something that was already waiting. The gate is at the bottom of the old mine.', 'c3_03', { shot: 'gate' }),
    c3_03: L('WREN', 'Stay on the ledge. The rock is older than it looks. It remembers being empty.', 'c3_branch_sam', { shot: 'ledge' }),

    c3_branch_sam: { t: 'branch', when: s => !!s.broughtSam, yes: 'c3_sam_yes', no: 'c3_sam_no' },
    c3_sam_yes: L('SAM', 'Ledge. Right. I\'ll just film from back here. For posterity. And for the police.', 'c3_04', { shot: 'sam' }),
    c3_sam_no: N('Your walkie hisses. Dana\'s voice, thin as a thread: "Ryan? It\'s 3:06. Hurry."', 'c3_04', { shot: 'walkie', signal: 4 }),
    c3_04: N('Halfway across, the ledge crumbles under Ryan\'s boot. The flashlight tumbles end over end into the dark, and the dark does not make a sound when it lands.', 'c3_qte_ledge', { shot: 'cliff', shake: 0.5 }),

    c3_qte_ledge: {
      t: 'qte', kind: 'sequence', keys: ['a', 'd', 'e'], window: 1250,
      prompt: 'CROSS THE LEDGE', hint: 'A — D — E',
      success: 'c3_ledge_ok', fail: 'c3_ledge_fail'
    },
    c3_ledge_ok: N('You throw yourself at the far wall, fingers finding a seam in the rock. Wren hauls you up by the jacket. For a moment, her hand is hot enough to steam in the rain.', 'c3_05', { shot: 'ledge', signal: 4 }),
    c3_ledge_fail: N('Your foot slips. The drop opens its mouth. Sam grabs your wrist, or maybe it is Wren, or maybe it is nobody at all, and you are on your knees on the ledge with your heart trying to climb out of your throat.', 'c3_05', { shot: 'cliff', shake: 0.8, damage: true }),
    c3_05: L('WREN', 'There. Below the waterline. Do you see it?', 'c3_06', { shot: 'gate', signal: 4 }),
    c3_06: N('A seam of red light hangs in the rock like a wound that has been open for a very long time. It pulses, slow and wet. The rain around it falls upward.', 'c3_07', { shot: 'gate' }),
    c3_07: L('WREN', 'It opens for the one who lost someone. That\'s you, Ryan. I\'m sorry.', 'c3_08', { shot: 'wren' }),
    c3_08: L('RYAN', 'What about Dana? What happens to her if we\'re too late?', 'c3_09', { shot: 'ryan_close' }),
    c3_09: L('WREN', 'He doesn\'t kill her. He keeps her. Forever, in a room where the song never ends and nobody ever comes.', 'c3_10', { shot: 'wren' }),
    c3_10: N('You step toward the light. The wound widens. It smells like rain on hot asphalt, and underneath that, like Jonah\'s jacket the summer before he died.', 'c3_11', { shot: 'gate_in' , signal: 4 }),
    c3_11: N('The dark takes your hand. It is almost gentle.', 'chapter4', { shot: 'gate_in', sfx: 'gate' }),

    /* ══════════════════ CHAPTER IV — THE HOLLOW ══════════════════ */

    chapter4: {
      t: 'chapter', numeral: 'IV', title: 'THE HOLLOW',
      sub: '3:06 AM — SOMEWHERE UNDER HAWKINS',
      scene: 'hollow', time: '3:06 AM', objective: 'Sever the tether.',
      next: 'c4_01', checkpoint: true
    },

    c4_01: N('The other side of Hawkins is a photograph left in the sun. The sky is red, the trees are black, and everything you remember has been rearranged by someone who only ever read about houses.', 'c4_02', { shot: 'wide', signal: 4 }),
    c4_02: N('Spores drift upward like snow that forgot which way is down. Somewhere, a clock is ticking. It is not the clock you came through.', 'c4_03', { shot: 'sky' }),
    c4_03: L('WREN', 'Don\'t breathe too deep. Don\'t answer the voices. If you see Jonah, it isn\'t Jonah.', 'c4_04', { shot: 'wren' }),
    c4_branch_sam: { t: 'branch', when: s => !!s.broughtSam, yes: 'c4_sam_yes', no: 'c4_sam_no' },
    c4_sam_yes: L('SAM', 'There are two of me in my viewfinder. One of them is smiling. I hate it here.', 'c4_05', { shot: 'sam' }),
    c4_sam_no: N('The walkie is dead. Or the walkie is working, and Dana is whispering from a room that does not exist.', 'c4_05', { shot: 'walkie', signal: 4 }),
    c4_05: L('WREN', 'Dana\'s tether is anchored to this place. A vine. It will be warm. It will feel like a hand.', 'c4_explore', { shot: 'house', objective: 'Find Dana\'s tether.' }),

    c4_explore: {
      t: 'explore',
      scene: 'hollow', shot: 'explore',
      prompt: 'Search the Hollow',
      hotspots: ['swing_set', 'red_tether', 'clock_door', 'dead_tree'],
      required: 3,
      objective: 'Find Dana\'s tether.',
      next: 'c4_vine_qte'
    },
    c4_vine_qte: {
      t: 'qte', kind: 'mash', key: 'space', window: 3000, target: 14,
      prompt: 'THE VINE HAS YOUR ANKLE', hint: 'MASH SPACE TO BREAK FREE',
      success: 'c4_vine_ok', fail: 'c4_vine_fail'
    },
    c4_vine_ok: N('You wrench your leg free. The vine splits open and something inside it—teeth, or a hand, or a memory—snaps shut on empty air.', 'c4_06', { shot: 'vine', shake: 0.6 }),
    c4_vine_fail: N('The vine drags you into the mud. It is warm. It has a pulse. Somewhere far away, Dana laughs in her sleep.', 'c4_vine_branch', { shot: 'vine', shake: 0.8, damage: true }),
    c4_vine_branch: { t: 'branch', when: s => !!s.broughtSam, yes: 'c4_sam_save', no: 'c4_wren_save' },
    c4_sam_save: N('Sam swings the camera tripod down like a sword. The vine recoils. He helps you up with shaking hands and does not stop filming.', 'c4_06', { shot: 'sam_help' }),
    c4_wren_save: N('Wren closes her fist. The vine bursts into black ash. Blood runs from her nose and she wipes it away before you can say anything.', 'c4_wren_save_2', { shot: 'wren_bleed', wrenWeak: true }),
    c4_wren_save_2: L('WREN', 'Don\'t look at me like that. I\'ve had worse birthdays.', 'c4_06', { shot: 'wren' }),
    c4_06: N('Past the treeline, the Creel house waits. Here it never burned. Its windows are lit. Someone is playing the piano inside, badly, with too many fingers.', 'c4_07', { shot: 'house' }),
    c4_07: L('WREN', 'The tether runs from the house to Dana. If we cut it, he loses his grip on her. If we cut it wrong, we cut her.', 'c4_choice_sever', { shot: 'tether', signal: 4 }),

    c4_choice_sever: {
      t: 'choice', prompt: 'The tether pulses under the mud. It is warm. It feels like a hand.',
      timer: 12, defaultIndex: 0,
      options: [
        { label: 'Burn it with the flare.', sub: 'Fire kills the vine. It might burn Dana too.', set: { method: 'fire' }, next: 'c4_sev_fire' },
        { label: 'Let Wren reach into the dark.', sub: 'She can cut it from the inside. It will cost her.', set: { method: 'wren', wren: 2, wrenWeak: true }, next: 'c4_sev_wren' },
        { label: 'Cut it yourself. With your hands.', sub: 'You are the one who left. Let it take something from you.', set: { method: 'self', strain: 1, jonah: 1 }, next: 'c4_sev_self' }
      ]
    },
    c4_sev_fire: N('The flare screams to life. Red light, real light, the first honest thing in this place. The vine hisses and pulls back from the heat like a struck dog.', 'c4_qte_sever', { shot: 'tether_fire' }),
    c4_sev_wren: L('WREN', 'Hold my hand. Whatever you hear in there, it isn\'t me.', 'c4_qte_sever', { shot: 'wren_hold' }),
    c4_sev_self: N('You put both hands into the mud and take hold of the tether. It is warm. It beats. It knows your name without being told.', 'c4_qte_sever', { shot: 'tether' }),

    c4_qte_sever: {
      t: 'qte', kind: 'hold', key: 'e', hold: 1500, window: 2400,
      prompt: 'SEVER THE TETHER', hint: 'HOLD E',
      success: 'c4_sever_ok', fail: 'c4_sever_fail'
    },
    c4_sever_ok: N('The tether comes apart with a sound like a phone being hung up in another room. Dana\'s voice floods your head—one clean, terrified syllable—and then the house across the mud throws every window open at once.', 'c4_08', { shot: 'house_open', shake: 0.7, sfx: 'impact' }),
    c4_sever_fail: N('The tether tightens around your wrists. For a second you see what Dana sees: a red room, a wooden chair, a clock with no face. Then it lets go, almost politely, and the house opens its eyes.', 'c4_08', { shot: 'house_open', shake: 0.9, damage: true }),
    c4_08: L('WREN', 'He felt that. He\'s coming.', 'c4_09', { shot: 'wren' }),
    c4_09: N('Every clock in the Hollow begins to strike at once. Not three. Not seven. Some number that comes after both.', 'c4_10', { shot: 'sky', signal: 4, sfx: 'clock_chime' }),
    c4_10: L('SAM', 'Ryan. The house. The whole house is turning into a clock.', 'c4_11', { shot: 'house_clock' }),
    c4_11: N('The front door opens inwards, into a darkness that is taller than the house. Somewhere inside, Jonah\'s voice says: "Took you long enough."', 'chapter5', { shot: 'door_dark', signal: 4 }),

    /* ══════════════════ CHAPTER V — 3:07 ══════════════════ */

    chapter5: {
      t: 'chapter', numeral: 'V', title: '3:07',
      sub: 'THE ROOM BETWEEN SECONDS',
      scene: 'lair', time: '3:07 AM', objective: 'End it.',
      next: 'c5_01', checkpoint: true
    },

    c5_01: N('The room has no walls. It has a clock face, forty feet across, and everything else is the dark leaning in to listen.', 'c5_02', { shot: 'wide', signal: 4 }),
    c5_02: N('Dana hangs suspended beneath the hands, asleep or dead or somewhere in between. The pendulum swings through her shadow without touching her.', 'c5_03', { shot: 'dana_float' }),
    c5_03: L('HOLLOW MAN', 'Ryan. You brought the little signal girl. And the one with the camera. And my favourite: the boy who ran.', 'c5_04', { shot: 'villain', voice: 'unknown' }),
    c5_04: L('RYAN', 'Let her go.', 'c5_05', { shot: 'ryan_close' }),
    c5_05: L('HOLLOW MAN', 'I did. Years ago. You remember, don\'t you? The floor gave way, and you had his hand, and then you didn\'t.', 'c5_06', { shot: 'villain', shake: 0.4 }),
    c5_06: L('RYAN', 'That\'s not true.', 'c5_07', { shot: 'ryan_close' }),
    c5_07: L('HOLLOW MAN', 'It is the only true thing in this room. I keep it warm for you. Every night at 3:07.', 'c5_08', { shot: 'villain' }),
    c5_08: L('WREN', 'Ryan. Look at me. Not at him.', 'c5_09', { shot: 'wren' }),
    c5_09: L('HOLLOW MAN', 'One name for another. Take her place, and the clock stops. Everyone goes home. Dana grows up. Marries someone dull. Has children who never learn your name.', 'c5_choice_offer', { shot: 'villain', signal: 4 }),

    c5_choice_offer: {
      t: 'choice', prompt: 'The clock hands are touching 3:07. The room is holding its breath.',
      timer: 13, defaultIndex: 1,
      options: [
        { label: 'Offer yourself. Take Dana\'s place.', sub: 'She goes home. You stay. The clock stops.', set: { sacrifice: true, dana: 2 }, next: 'c5_offer_yes' },
        { label: 'Refuse him. Tear the clock down.', sub: 'Nobody gets left behind. Not again.', set: { sacrifice: false, wren: 1 }, next: 'c5_offer_no' },
        { label: 'Tell Wren to burn him. End it.', sub: 'She has been waiting her whole life to be asked.', set: { sacrifice: false, wren: 2, wrenBurned: true }, next: 'c5_offer_wren' }
      ]
    },
    c5_offer_yes: L('HOLLOW MAN', 'There he is. The boy who stays.', 'c5_10', { shot: 'villain' }),
    c5_offer_no: L('HOLLOW MAN', 'Then you have chosen the hard way. I do so love the hard way.', 'c5_10', { shot: 'villain' }),
    c5_offer_wren: L('WREN', 'I thought you\'d never ask.', 'c5_10', { shot: 'wren' }),
    c5_10: L('DANA', 'Ryan— don\'t—', 'c5_11', { shot: 'dana_float', shake: 0.3 }),
    c5_11: N('The clock strikes the hour. The floor falls away. You are holding Dana\'s hand, and the room is pulling her up, and the pendulum is coming down like a blade.', 'c5_qte_hold', { shot: 'final_hold', shake: 0.6, signal: 4 }),

    c5_qte_hold: {
      t: 'qte', kind: 'hold', key: 'e', hold: 1700, window: 2600,
      prompt: 'DON\'T LET GO', hint: 'HOLD E',
      success: 'c5_hold_ok', fail: 'c5_hold_fail'
    },
    c5_hold_ok: N('You hold. The pendulum shrieks past your shoulder. Dana\'s fingers dig into yours hard enough to bruise.', 'c5_qte_run', { shot: 'final_hold' }),
    c5_hold_fail: N('Your grip slips. Dana lurches upward, hair tangling in the hands of the clock. You catch her ankle. Something in your shoulder tears.', 'c5_qte_run', { shot: 'final_hold', damage: true }),

    c5_qte_run: {
      t: 'qte', kind: 'sequence', keys: ['a', 'd', 'space'], window: 1150,
      prompt: 'GET TO THE CLOCK', hint: 'A — D — SPACE',
      success: 'c5_run_ok', fail: 'c5_run_fail'
    },
    c5_run_ok: N('You run across the falling floor. Wren is already at the clock face, both hands pressed to the glass, screaming a word that sounds like a struck bell.', 'c5_qte_strike', { shot: 'clock_face' }),
    c5_run_fail: N('The floor bucks. You go down hard, chin split, mouth full of dust that tastes like the Quake. The clock face is right there. You crawl.', 'c5_qte_strike', { shot: 'clock_face', damage: true }),

    c5_qte_strike: {
      t: 'qte', kind: 'press', key: 'e', window: 1150,
      prompt: 'BREAK THE FACE', hint: 'STRIKE NOW',
      success: 'c5_strike_ok', fail: 'c5_strike_fail'
    },
    c5_strike_ok: N('Your fist goes through the clock face. Glass, then something softer. The Hollow Man screams with every voice he has ever stolen, including Jonah\'s. Especially Jonah\'s.', 'final_branch', { shot: 'shatter', shake: 1.2, flash: 'blood', signal: 4, set: { finalSuccess: true } }),
    c5_strike_fail: N('Your fist glances off the glass. The hands close around your wrist. The room turns, slowly, like a key in a lock. 3:07 becomes 3:07 becomes 3:07.', 'final_branch', { shot: 'shatter_fail', shake: 1, flash: 'blood', set: { finalSuccess: false } }),

    final_branch: { t: 'branch', when: s => resolveEnding(s) === 'ending_loop', yes: 'ending_loop', no: 'final_second' },
    final_second: { t: 'branch', when: s => resolveEnding(s) === 'ending_newhollow', yes: 'ending_newhollow', no: 'final_third' },
    final_third: { t: 'branch', when: s => resolveEnding(s) === 'ending_longway', yes: 'ending_longway', no: 'ending_signal' },

    /* ══════════════════ ENDINGS ══════════════════ */

    ending_signal: {
      t: 'end', id: 'signal', number: 1, title: 'THE LAST SIGNAL', tone: 'good',
      text: 'The clock falls. Dawn comes up over Hawkins like an apology. Dana goes home. Wren goes quiet for a while, then starts eating lunch with you again. Sam\'s tape is blank for the first four minutes, and then it isn\'t. On the tape, behind the three of you walking away, a grandfather clock stands in the middle of the quarry, untouched. Its hands are moving. Somewhere, someone new is running from something. You are already reaching for the door.',
      epigraph: 'Every ending is somebody\'s beginning.'
    },
    ending_newhollow: {
      t: 'end', id: 'newhollow', number: 2, title: 'THE NEW HOLLOW', tone: 'sacrifice',
      text: 'You take Dana\'s place. The hands close gently, the way a book closes on a pressed flower. She wakes in her bed at 3:08 with no memory of the clock and a brother-shaped absence she cannot name. The Hollow Man keeps his promise: Dana grows up. She marries someone dull. She has children who never learn your name. In the room between seconds, you sit in the chair and listen to the ticks. Sometimes, at 3:07, a new voice starts running. You are learning how to call them home.',
      epigraph: 'The clock stops for no one. But it can be made to wait.'
    },
    ending_longway: {
      t: 'end', id: 'longway', number: 3, title: 'THE LONG WAY HOME', tone: 'bittersweet',
      text: 'Wren burns him. She burns brighter than the red sky and does not come back all the way. Dana wakes in the quarry with no mark on her wrist. The three of you walk home in the rain. Wren laughs at Sam\'s jokes one second late, every time, as if hearing them from another room. In the spring, she leaves Hawkins with a suitcase and a mixtape and a nosebleed she cannot explain. You get a postcard every year. It always says the same thing: DON\'T LET THE LIGHTS TAKE YOU.',
      epigraph: 'Some doors close from the inside.'
    },
    ending_loop: {
      t: 'end', id: 'loop', number: 4, title: '3:07', tone: 'bad',
      text: 'The clock hands close on your wrist. The room folds. You wake in your bed at 3:04 with the taste of ash in your mouth and Dana\'s shoes on the porch downstairs. Nine houses fell into the earth a year ago. The town calls it a sinkhole. The town is lying. Tonight, Dana walks back into the house that started it all. This time, you are almost sure you remember the way.',
      epigraph: 'The signal never really ends. It just changes frequency.'
    }
  }
};

export function resolveEnding(state) {
  if (!state.finalSuccess) return 'ending_loop';
  if (state.sacrifice) return 'ending_newhollow';
  if (state.wrenBurned || (state.wrenWeak && state.method === 'wren')) return 'ending_longway';
  return 'ending_signal';
}

export function initialFlags() {
  return {
    dana: 0, wren: 0, sam: 0, jonah: 0,
    entry: 'quiet', record: 'static', method: 'fire',
    broughtSam: false, sacrifice: false, finalSuccess: false,
    wrenWeak: false, wrenBurned: false,
    strain: 0, fails: 0, found: 0, honest: false, quiet: false, stern: false
  };
}

export const chapterMeta = [
  { id: 'chapter1', numeral: 'I', name: 'The House on Maple Street' },
  { id: 'chapter2', numeral: 'II', name: 'The Signal' },
  { id: 'chapter3', numeral: 'III', name: 'The Quarry' },
  { id: 'chapter4', numeral: 'IV', name: 'The Hollow' },
  { id: 'chapter5', numeral: 'V', name: '3:07' }
];

export const endingMeta = [
  { id: 'ending_signal', name: 'The Last Signal' },
  { id: 'ending_newhollow', name: 'The New Hollow' },
  { id: 'ending_longway', name: 'The Long Way Home' },
  { id: 'ending_loop', name: '3:07' }
];
