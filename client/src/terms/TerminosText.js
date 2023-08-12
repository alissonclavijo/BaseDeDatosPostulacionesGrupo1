import React from "react";
import DOMPurify from "dompurify";
import "./TerminosText.css";

const TermsAndConditions = () => {
  const termsAndConditionsHTML = `
    <html>
    <head>
        <title>Términos y Condiciones de Uso</title>
    </head>
    <body>
        <h1>Sistema de Contratación Pública ESPE</h1>
        <h2>Términos y Condiciones de Uso de Datos de Clientes y Uso de la Aplicación Web</h2>
        <p><strong>Fecha de entrada en vigencia: 01 de agosto de 2023.</strong></p>
        <p>A continuación, se presentan los términos y condiciones que rigen el uso de los datos de los clientes
        y la utilización de la aplicación web desarrollada para la gestión y administración de postulantes
        para docentes en la Universidad de las Fuerzas Armadas ESPE. Al acceder y utilizar la aplicación web,
        usted acepta cumplir con estos términos y condiciones. Si no está de acuerdo con estos términos,
        le rogamos que no utilice la aplicación.</p>
    
        <!-- Fragmento 1: Uso y Protección de Datos de los Clientes -->
        <h3>Uso y Protección de Datos de los Clientes</h3>
        <p><strong>1.1 Recopilación de Datos</strong><br>
        La aplicación web recopilará y almacenará ciertos datos personales de los postulantes, tales como
        nombres, direcciones de correo electrónico, números de teléfono y otra información relevante
        necesaria para el proceso de postulación a cargos docentes en la Universidad de las Fuerzas
        Armadas ESPE. La recopilación de datos se realizará mediante un formulario de inscripción que los
        usuarios deben completar para registrarse en la plataforma.</p>
        <p><strong>1.2 Uso de Datos</strong><br>
        Los datos personales recopilados se utilizarán exclusivamente con el propósito de facilitar y
        optimizar el proceso de selección y gestión de postulantes para cargos docentes en la Universidad
        de las Fuerzas Armadas ESPE. La información proporcionada será tratada con la máxima
        confidencialidad y no se utilizará para fines distintos a los establecidos en este acuerdo, ni será
        compartida con terceros no autorizados.</p>
        <p><strong>1.3 Almacenamiento y Seguridad</strong><br>
        La aplicación implementará medidas de seguridad robustas para proteger la información personal
        de los postulantes. Se tomarán precauciones razonables para evitar pérdidas, mal uso o acceso no
        autorizado a los datos almacenados en la base de datos del sistema. Sin embargo, es importante
        destacar que ninguna transmisión de datos por Internet o sistema de almacenamiento puede
        garantizar una seguridad absoluta, y los usuarios deben entender y aceptar los riesgos asociados
        con la transmisión de información en línea.</p>
        <p><strong>1.4 Derechos del Cliente</strong><br>
        Los clientes tendrán el derecho de acceder, corregir o eliminar sus datos personales almacenados
        en la aplicación web, en cualquier momento y de acuerdo con la legislación aplicable. Para ejercer
        estos derechos, los clientes pueden ponerse en contacto con el administrador del sistema a través
        de la opción de soporte proporcionada en la plataforma.</p>
    
        <!-- Fragmento 2: Derechos de los Postulantes según la LOPD -->
        <h3>Derechos de los Postulantes según la LOPD</h3>
        <p>Los postulantes tienen derecho a ejercer los derechos establecidos en la LOPD, entre ellos:</p>
        <ol type="a">
            <li><strong>Acceso:</strong> Los postulantes podrán solicitar y obtener información sobre los datos personales que se encuentren almacenados en la aplicación web y cómo están siendo utilizados.</li>
            <li><strong>Rectificación:</strong> En caso de detectar inexactitudes o errores en sus datos personales, los postulantes podrán solicitar su corrección o actualización.</li>
            <li><strong>Supresión:</strong> Los postulantes podrán solicitar la eliminación de sus datos personales cuando ya no sean necesarios para los fines establecidos en este acuerdo, excepto cuando existan obligaciones legales que requieran su retención.</li>
            <li><strong>Oposición:</strong> Los postulantes podrán oponerse al tratamiento de sus datos personales en caso de que consideren que este se está realizando de manera indebida o no autorizada.</li>
        </ol>
        <p><strong>1.5 Responsabilidad del Administrador del Sistema</strong><br>
        El administrador del sistema de la aplicación web será el responsable del tratamiento de los datos personales
        de los postulantes. Se compromete a implementar medidas técnicas y organizativas adecuadas para garantizar
        la confidencialidad, integridad y disponibilidad de los datos, así como a adoptar las medidas de seguridad necesarias
        para proteger la información frente a posibles incidentes de seguridad.</p>
        <p><strong>1.6 Tiempo de Retención</strong><br>
        Los datos personales de los postulantes serán conservados durante el tiempo necesario para cumplir con los fines para
        los cuales fueron recopilados, así como para cumplir con las obligaciones legales y regulatorias aplicables.</p>
        <p><strong>1.7 Notificación de Cambios</strong><br>
        En caso de que se realicen modificaciones a la política de privacidad y protección de datos, se notificará a los postulantes
        a través de la aplicación web o mediante el correo electrónico proporcionado durante el proceso de registro.</p>
        <p><strong>1.8 Contacto</strong><br>
        Si los postulantes tienen alguna pregunta, inquietud o desean ejercer sus derechos en relación con sus datos personales,
        pueden ponerse en contacto con el administrador del sistema a través de la opción de soporte proporcionada en la plataforma.</p>
        
        <!-- Fragmento 3: Uso de la Aplicación Web -->
        <h2>Uso de la Aplicación Web</h2>
        <h3>2.1 Acceso y Registro</h3>
        <p>El acceso y registro en la aplicación web están reservados exclusivamente para postulantes a cargos docentes
        en la Universidad de las Fuerzas Armadas ESPE. Los usuarios deberán proporcionar información veraz y actualizada
        durante el proceso de registro.</p>
        <h3>2.2 Propósito del Uso</h3>
        <p>La aplicación web tiene como propósito centralizar y mejorar la eficiencia del proceso de selección y gestión
        de postulantes para docentes en la Universidad de las Fuerzas Armadas ESPE. Los usuarios se comprometen a utilizar
        la plataforma únicamente con fines legítimos y de acuerdo con las políticas establecidas.</p>
        <h3>2.3 Responsabilidad del Usuario</h3>
        <p>Los usuarios serán responsables de mantener la confidencialidad de sus credenciales de acceso y no compartir
        sus datos de inicio de sesión con terceros. Cualquier actividad realizada en la aplicación web utilizando las credenciales
        del usuario se considerará responsabilidad exclusiva del titular de la cuenta.</p>
        <h3>2.4 Uso Adecuado</h3>
        <p>Los usuarios se comprometen a no utilizar la aplicación web para enviar o publicar contenido ofensivo, ilegal,
        difamatorio, fraudulento o que viole los derechos de terceros. La Universidad de las Fuerzas Armadas ESPE y los administradores
        del sistema se reservan el derecho de tomar medidas adecuadas en caso de detectar un uso inadecuado de la plataforma.</p>
        <h3>2.5 Modificaciones y Actualizaciones</h3>
        <p>La Universidad de las Fuerzas Armadas ESPE y los administradores del sistema se reservan el derecho de modificar
        o actualizar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigencia a partir de su
        publicación en la aplicación web. Se recomienda a los usuarios revisar periódicamente esta sección para estar al tanto de los cambios.</p>
        <p>Al utilizar la aplicación web, los usuarios manifiestan su conformidad con estos términos y condiciones, así como con la política
        de privacidad de la plataforma. Si no está de acuerdo con alguno de los puntos aquí expuestos, se le solicita abstenerse
        de utilizar la aplicación.</p>
        <p>Si tiene alguna pregunta o inquietud sobre estos términos y condiciones, o sobre el uso de datos personales, puede ponerse
        en contacto con el administrador del sistema a través de la opción de soporte proporcionada en la aplicación web.</p>
        <p>Agradecemos su comprensión y cooperación en el cumplimiento de estos términos y condiciones.</p>
    </body>
    </html>
    `;

  const sanitizedHTML = DOMPurify.sanitize(termsAndConditionsHTML);

  return <div className="justified-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};

export default TermsAndConditions;
