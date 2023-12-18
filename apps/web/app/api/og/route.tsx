import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request): Promise<ImageResponse> {
  const { searchParams } = new URL(request.url);
  const fontData = await fetch(
    new URL(
      "../../../public/font/graphik-semibold-webfont.ttf",
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          color: "white",
          background: "black",
          width: "100%",
          height: "100%",
          padding: 180,
          paddingTop: 220,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <svg
          fill="none"
          height="630"
          style={{
            position: "absolute",
          }}
          viewBox="0 0 1200 630"
          width="1200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_5255_2965)">
            <rect fill="black" height="630" width="1200" />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="-44.5"
              y="573.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="84.5"
              y="573.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="213.5"
              y="573.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="342.5"
              y="573.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="471.5"
              y="573.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="-44.5"
              y="444.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="84.5"
              y="444.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="213.5"
              y="444.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="342.5"
              y="444.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="471.5"
              y="444.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="-44.5"
              y="315.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="84.5"
              y="315.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="213.5"
              y="315.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="342.5"
              y="315.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="471.5"
              y="315.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="600.5"
              y="573.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="729.5"
              y="573.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="858.5"
              y="573.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="987.5"
              y="573.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="1116.5"
              y="573.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="600.5"
              y="444.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="729.5"
              y="444.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="858.5"
              y="444.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="987.5"
              y="444.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="1116.5"
              y="444.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="600.5"
              y="315.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="729.5"
              y="315.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="858.5"
              y="315.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="987.5"
              y="315.5"
            />
            <rect
              height="128"
              stroke="white"
              strokeOpacity="0.2"
              width="128"
              x="1116.5"
              y="315.5"
            />
            <rect
              fill="url(#paint0_linear_5255_2965)"
              height="315"
              width="1200"
              y="315"
            />
            <path
              d="M518.046 185.225C506.82 185.225 501.665 179.955 501.149 171.765H510.027C510.428 175.43 511.975 178.466 518.046 178.466C522.113 178.466 524.805 176.232 524.805 173.025C524.805 169.76 523.086 168.614 517.072 167.698C506.591 166.323 502.295 163.173 502.295 155.269C502.295 148.281 508.137 143.069 517.187 143.069C526.409 143.069 531.793 147.193 532.537 155.326H524.003C523.43 151.603 521.254 149.885 517.187 149.885C513.12 149.885 511.058 151.775 511.058 154.524C511.058 157.445 512.376 158.82 518.676 159.736C528.585 160.996 533.683 163.689 533.683 172.166C533.683 179.44 527.726 185.225 518.046 185.225ZM536.011 184.595V154.639H544.259V184.595H536.011ZM540.078 150.572C537.443 150.572 535.381 148.625 535.381 146.047C535.381 143.47 537.443 141.522 540.078 141.522C542.77 141.522 544.832 143.47 544.832 146.047C544.832 148.625 542.77 150.572 540.078 150.572ZM548.283 184.595V141.064H556.531V184.595H548.283ZM568.345 184.595L557.405 154.639H566.283L573.443 176.06L580.545 154.639H588.564L577.682 184.595H568.345ZM601.559 185.225C592.509 185.225 585.922 179.554 585.922 169.989V169.531C585.922 160.08 592.624 153.951 601.33 153.951C609.062 153.951 615.936 158.476 615.936 169.187V171.478H594.342C594.571 176.461 597.263 179.325 601.788 179.325C605.626 179.325 607.516 177.664 608.031 175.144H615.878C614.905 181.616 609.75 185.225 601.559 185.225ZM594.457 166.381H607.86C607.573 161.856 605.282 159.679 601.33 159.679C597.607 159.679 595.087 162.142 594.457 166.381ZM617.534 184.595V154.639H625.84V160.366C627.73 156.357 630.651 154.238 635.52 154.18V161.913C629.391 161.856 625.84 163.86 625.84 169.588V184.595H617.534ZM637.878 184.595V143.641H653.973C662.908 143.641 667.548 147.307 667.548 154.295V154.524C667.548 158.82 665.486 161.97 660.904 163.288C666.23 164.376 669.094 167.412 669.094 172.91V173.139C669.094 180.643 664.168 184.595 654.718 184.595H637.878ZM646.928 178.18H653.286C657.868 178.18 659.93 176.118 659.93 172.395V172.166C659.93 168.385 657.868 166.438 652.828 166.438H646.928V178.18ZM646.928 160.481H652.484C656.952 160.481 658.727 158.877 658.727 155.211V154.982C658.727 151.546 656.78 149.999 652.427 149.999H646.928V160.481ZM679.128 185.225C673.687 185.225 669.105 182.59 669.105 176.29C669.105 169.302 675.52 166.667 684.684 166.667H688.063V165.464C688.063 161.913 686.975 159.965 683.195 159.965C679.93 159.965 678.441 161.627 678.097 164.204H670.25C670.766 157.102 676.379 153.951 683.71 153.951C691.042 153.951 696.254 156.93 696.254 165.063V184.595H688.178V180.986C686.46 183.392 683.825 185.225 679.128 185.225ZM681.591 179.44C685.257 179.44 688.063 177.435 688.063 174.113V171.593H684.856C680.045 171.593 677.238 172.624 677.238 175.831C677.238 178.008 678.555 179.44 681.591 179.44ZM713.12 185.225C704.356 185.225 697.712 179.783 697.712 169.989V169.531C697.712 159.851 704.642 153.951 713.177 153.951C720.107 153.951 726.522 156.987 727.267 165.579H719.42C718.847 162.085 716.728 160.481 713.349 160.481C709.053 160.481 706.189 163.689 706.189 169.416V169.874C706.189 175.889 708.881 178.982 713.52 178.982C716.843 178.982 719.535 177.034 719.936 173.197H727.439C726.981 180.299 721.826 185.225 713.12 185.225ZM728.821 184.595V141.064H737.126V167.297L746.748 154.639H755.569L744.686 168.271L756.428 184.595H747.035L737.126 170.447V184.595H728.821Z"
              fill="white"
            />
            <path
              d="M442.867 143.084L442.75 143.158V143.296V158.167V158.305L442.867 158.379L481.976 182.864L443.036 182.864H442.786V183.114V196.411V196.661H443.036H461.504H461.576L461.636 196.623L482.979 183.326L483.096 183.252V183.114V168.244V168.105L482.979 168.032L443.87 143.546L482.811 143.546H483.061V143.296V130V129.75H482.811H464.271H464.199L464.138 129.788L442.867 143.084Z"
              fill="white"
              stroke="white"
              strokeWidth="0.5"
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_5255_2965"
              x1="600"
              x2="600"
              y1="315"
              y2="630"
            >
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_5255_2965">
              <rect fill="white" height="630" width="1200" />
            </clipPath>
          </defs>
        </svg>
        <div
          className="z-10 text-white"
          style={{
            letterSpacing: -3,
          }}
        >
          {searchParams.has("text")
            ? searchParams.get("text")
            : "Brining the future to the present, now."}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: "twemoji",
      fonts: [
        {
          name: "Graphik",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );
}
