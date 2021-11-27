import html from 'choo/html';

export default (state, emit) => {
    return html`<main id="main" class="c">
    <form onsubmit="e => e.preventDefault()" action="warn.html">
      <p>
        <label class="bold" for="warnings">
          Warnings
        </label>
        <select id="warnings" name="about" class="card w-100">
          <option>Abandonment</option><option>Ableism</option><option>Abortion</option><option>Alcohol</option><option>Alcoholism</option><option>Amputation</option><option>Animal Abuse</option><option>Animal Cruelty</option><option>Animal Death</option><option>Animal Violence</option><option>Anxiety</option><option>Autism</option><option>Bipolar Disorder</option><option>Blood</option><option>Body Horror</option><option>Body Shaming</option><option>Bones</option><option>Bullying</option><option>Cannibalism</option><option>Car Accident</option><option>Child Abuse</option><option>Childbirth</option><option>Classism</option><option>Death</option><option>Decapitation</option><option>Depictions of Medical Procedures</option><option>Depression</option><option>Dissociation</option><option>Domestic Violence</option><option>Drug Use</option><option>Drunkenness</option><option>Eating Disorder</option><option>Emotional Abuse</option><option>Enslavement/Coersion</option><option>Eugenics</option><option>Gore</option><option>Hallucinations</option><option>Homophobia</option><option>Incest</option><option>Insects</option><option>Islamophobia</option><option>Kidnapping</option><option>Mental Abuse</option><option>Mental Illness</option><option>Miscarriages</option><option>Murder</option><option>Nazi Symbolism/Paraphernalia</option><option>Nazism</option><option>Needles</option><option>Neglect</option><option>OCD</option><option>Panic Attacks</option><option>Paranoia</option><option>Pedophilia</option><option>Personality Disorder</option><option>Physical Abuse</option><option>Pornography</option><option>Pregnancy</option><option>Prostitution</option><option>Psychosis</option><option>Racial Slurs</option><option>Racism</option><option>Rape</option><option>Scarification</option><option>Schizophrenia</option><option>Self-Harm</option><option>Sex-Positive Shaming</option><option>Sexism</option><option>Sexual Abuse</option><option>Sexual Assault</option><option>Sexual Harrassment</option><option>Sexual Slurs</option><option>Shooting</option><option>Skeletons</option><option>Skulls</option><option>Slut Shaming</option><option>Smoking</option><option>Snakes</option><option>Spiders</option><option>Stalking</option><option>Substance Abuse</option><option>Suicide</option><option>Swearing</option><option>Terrorism</option><option>Torture</option><option>Transphobia</option><option>Verbal Abuse</option><option>Violence</option><option>Vomit</option><option>Warfare</option><option>Weapons</option><option>Xenophobia</option>
        </select>
      </p>
      <p>
        <label class="bold" for="url">
          URL
        </label>
        <input id="url" name="at" class="card w-100" placeholder="Link to Warn About" />
      </p>
      <p>
        <button class="rounded btn primary">
          Get Link!
        </button>
      </p>
    </form>
  </main>`;
}