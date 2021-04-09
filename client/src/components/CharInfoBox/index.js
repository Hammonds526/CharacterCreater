import React from "react";
import "./style.css";
import Button from "../Button";
import Corner from "../Corner";
import WoodBeam from "../WoodBeam";

function CharInfoBox(props) {
  return (
    <div class="char-info-box__container p-5 mt-5 text-white">
      <WoodBeam beamStyle={{ top: "-8px" }} />

      <Corner
        cornerStyle={{
          width: "77px",
          height: "auto",
          left: "-43px",
          top: "-37px",
        }}
      />
      <h6 className="text-white ml-5 mt-3">Choose a Race</h6>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
        neque id risus condimentum congue. Nam vitae condimentum libero, sed
        pulvinar odio. Sed odio diam, rutrum vitae nibh ac, pellentesque commodo
        enim. Cras nisl metus, iaculis eu urna eu, imperdiet porttitor nulla.
        Mauris eleifend erat sed dolor eleifend tincidunt. Integer vitae magna
        augue. Vestibulum diam nunc, eleifend eget nulla quis, mollis congue
        libero. Donec ligula ipsum, ornare quis metus sit amet, bibendum blandit
        leo. Quisque eu magna et mauris malesuada fringilla. Etiam sed faucibus
        mauris. Praesent rhoncus risus at leo congue, in auctor quam molestie.
        Cras eget magna magna. Donec blandit bibendum risus, non consectetur
      </p>
      <p>
        nibh gravida nec. Donec scelerisque gravida vestibulum. Aliquam
        dignissim pharetra arcu, eu consectetur purus ultricies in. Pellentesque
        sed elementum nulla, quis dapibus felis. Nam egestas lorem at gravida
        efficitur. In hac habitasse platea dictumst. In ac justo sagittis,
        tempus orci tristique, volutpat sem. Etiam fermentum, nibh et rhoncus
        porta, magna ex bibendum lacus, sed lacinia erat tortor fermentum urna.
        Quisque iaculis ultrices libero, in faucibus diam sagittis sit amet.
      </p>
      <p>
        Proin id imperdiet dui. Pellentesque neque dolor, efficitur a massa
        varius, malesuada commodo odio. Etiam eget neque in sapien sollicitudin
        egestas at vitae felis. Nam tincidunt nibh varius arcu luctus ultrices.
        Suspendisse arcu nibh, ultricies at orci ut, cursus condimentum lorem.
        Donec a ipsum consectetur, cursus nisl ac, bibendum quam. Cras sed orci
        vel est imperdiet egestas. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Quisque aliquet lectus tellus,
        at consectetur leo mollis dictum. Pellentesque euismod sit amet odio ac
        sagittis. Duis ut vestibulum felis, nec consectetur dolor.
      </p>
    </div>
  );
}

export default CharInfoBox;