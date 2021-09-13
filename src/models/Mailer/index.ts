import sgMail from '@sendgrid/mail';
import { MAIL_API_KEY } from '../../config/api';
sgMail.setApiKey(MAIL_API_KEY);

class Mailer {
  static sendSignUpMail(mail: string, pass:string, name: string): void {
    const msg = {
      to: mail, // Change to your recipient
      from: 'SelfWatcher<info@fraktur.ru>', // Change to your verified sender
      subject: 'Вы зарагестрировались на сайте SelfWatcher',
      text: 'Приветствуем, ' + name + '. Вы только что зарегестрировались на сайте SelfWatcher. Ваш пароль: ' + pass,
      html: `<div style="color: #4F4F4F">
        <h2 style="font-size: 1.4rem;">Приветствуем, ${name}</h2>
        <hr>
        <p>
          Вы только что зарегестрировались на сайте
          <a style="color: #4F4F4F" href="http://pick-me-up.ru/">SelfWatcher</a>
        </p>
        <p>Ваш пароль: <span style="font-size:1.2rem;font-weight: 800;">${pass}</span></p>
      </div>`,
    };
    sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
      console.error(error.response.body)
    });
  }

  static async sendRecoveryMail(mail: string, value: number): Promise<boolean> {
    const msg = {
      to: mail, // Change to your recipient
      from: 'SelfWatcher<info@fraktur.ru>', // Change to your verified sender
      subject: 'Запрос на восстановление пароля на сайте SelfWatcher',
      text: 'Приветствуем. Вы только что запросили сброс пароля на сайте SelfWatcher. Вам следует ввести данные цифры: ' + value,
      html: `<div style="color: #4F4F4F">
        <h2 style="font-size: 1.4rem;">Приветствуем</h2>
        <hr>
        <p>
          Вы только что запросили сброс пароля на сайте
          <a style="color: #4F4F4F" href="http://pick-me-up.ru/">SelfWatcher</a>
        </p>
        <p>Вам следует ввести цифры: <span style="font-size:1.2rem;font-weight: 800;">${value}</span></p>
      </div>`,
    };

    return await sgMail.send(msg).then(() => {
      return true;
    })
    .catch((error) => {
      console.error(error);
      console.error(error.response.body);
      return false;
    });
  }

  static async sendPassWasChanged(mail: string, pass: string): Promise<boolean> {
    const msg = {
      to: mail, // Change to your recipient
      from: 'SelfWatcher<info@fraktur.ru>', // Change to your verified sender
      subject: 'Запрос на восстановление пароля на сайте SelfWatcher',
      text: 'Приветствуем. Вы только что изменили пароль на сайте SelfWatcher. Ваш новый пароль: ' + pass,
      html: `<div style="color: #4F4F4F">
        <h2 style="font-size: 1.4rem;">Приветствуем</h2>
        <hr>
        <p>
          Вы только что изменили пароль на сайте
          <a style="color: #4F4F4F" href="http://pick-me-up.ru/">SelfWatcher</a>
        </p>
        <p>Ваш новый пароль: <span style="font-size:1.2rem;font-weight: 800;">${pass}</span></p>
      </div>`,
    };

    return await sgMail.send(msg).then(() => {
      return true;
    })
    .catch((error) => {
      console.error(error);
      console.error(error.response.body);
      return false;
    });
  }
}

export default Mailer;
