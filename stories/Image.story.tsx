import React, { useState } from 'react';
import { Image, Button, Space } from '@self';

function ImageWrapper({ actions }) {
  console.log(actions);
  return (
    <Image
      width={200}
      src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
      previewProps={{
        actions: actions || [],
      }}
    />
  );
}
ImageWrapper.displayName = 'Image';

function Demo1() {
  const [actions, setActions] = useState([]);
  return (
    <a>
      <h2>Loop rendering in Image component</h2>
      <span
        onClick={() => {
          setActions([
            {
              key: 'download',
              content: (
                <span
                  onClick={() => {
                    setActions([
                      {
                        key: 'info',
                        content: 'info',
                        name: 'Info',
                      },
                    ]);
                  }}
                >
                  download
                </span>
              ),
              name: 'Download',
            },
            {
              key: 'info',
              content: 'info',
              name: 'Info',
            },
          ]);
        }}
      >
        add
      </span>
      <br />
      <Image.PreviewGroup>
        <ImageWrapper actions={actions} />
      </Image.PreviewGroup>
    </a>
  );
}

function DemoWheelSwitch() {
  return (
    <div>
      <a>
        <h2>Wheel Switch</h2>
        <br />
        <Image
          width={200}
          wheelable={false}
          src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
        />
        <Image.PreviewGroup wheelable={false}>
          <ImageWrapper actions={undefined} />
          <ImageWrapper actions={undefined} />
        </Image.PreviewGroup>
      </a>
    </div>
  );
}

export const Demo = () => (
  <>
    <Demo1 />
    <DemoWheelSwitch />
  </>
);

export default {
  title: 'Image',
};
