import Link from "next/link";
import { Separator, Logo } from "../shared";

export function Footer(): JSX.Element {
  return (
    <footer className="overflow-visible mx-auto mt-[300px]">
      <Separator />
      <div className="bg-zinc-700 bg-opacity-10">
        <div className="w-full mx-auto max-w-[1400px] p-4 relative h-[500px] sm:h-[600px] lg:h-[350px]">
          <div className="bottom-16 absolute grid lg:grid-cols-2 w-[calc(100%-32px)]">
            <div>
              <div className="hidden sm:block">
                <p className="text-3xl tracking-[-0.05em] font-bold content-center  ml-7">
                  Powering mission-critical <br /> construction throughout
                  Europe.
                </p>
                <p className="px-7 text-sm mb-2  mt-2">
                  SilverBack HQ ⌁ Station Mews, Lindsay Grove, Dublin 9, D09
                  CC92, Ireland <br />
                  <Link href="tel:+353 1 441 0102">+353 1 441 0102</Link> |{" "}
                  <Link href="mailto:work@silverback.ie">
                    work@silverback.ie
                  </Link>
                </p>
                <div className="px-7 flex gap-3 mb-10">
                  <Link
                    href="https://www.facebook.com/SilverBackStaffing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      height="18px"
                      version="1.1"
                      viewBox="0 0 32 32"
                      width="18px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>facebook</title>
                      <path d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/silverback-staffing/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      height="18px"
                      version="1.1"
                      viewBox="0 0 32 32"
                      width="18px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>linkedin</title>
                      <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/silverbackconstruction/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      height="18px"
                      version="1.1"
                      viewBox="0 0 32 32"
                      width="18px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>instagram</title>
                      <path d="M25.805 7.996c0 0 0 0.001 0 0.001 0 0.994-0.806 1.799-1.799 1.799s-1.799-0.806-1.799-1.799c0-0.994 0.806-1.799 1.799-1.799v0c0.993 0.001 1.798 0.805 1.799 1.798v0zM16 20.999c-2.761 0-4.999-2.238-4.999-4.999s2.238-4.999 4.999-4.999c2.761 0 4.999 2.238 4.999 4.999v0c0 0 0 0.001 0 0.001 0 2.76-2.237 4.997-4.997 4.997-0 0-0.001 0-0.001 0h0zM16 8.3c0 0 0 0-0 0-4.253 0-7.7 3.448-7.7 7.7s3.448 7.7 7.7 7.7c4.253 0 7.7-3.448 7.7-7.7v0c0-0 0-0 0-0.001 0-4.252-3.447-7.7-7.7-7.7-0 0-0 0-0.001 0h0zM16 3.704c4.003 0 4.48 0.020 6.061 0.089 1.003 0.012 1.957 0.202 2.84 0.538l-0.057-0.019c1.314 0.512 2.334 1.532 2.835 2.812l0.012 0.034c0.316 0.826 0.504 1.781 0.516 2.778l0 0.005c0.071 1.582 0.087 2.057 0.087 6.061s-0.019 4.48-0.092 6.061c-0.019 1.004-0.21 1.958-0.545 2.841l0.019-0.058c-0.258 0.676-0.64 1.252-1.123 1.726l-0.001 0.001c-0.473 0.484-1.049 0.866-1.692 1.109l-0.032 0.011c-0.829 0.316-1.787 0.504-2.788 0.516l-0.005 0c-1.592 0.071-2.061 0.087-6.072 0.087-4.013 0-4.481-0.019-6.072-0.092-1.008-0.019-1.966-0.21-2.853-0.545l0.059 0.019c-0.676-0.254-1.252-0.637-1.722-1.122l-0.001-0.001c-0.489-0.47-0.873-1.047-1.114-1.693l-0.010-0.031c-0.315-0.828-0.506-1.785-0.525-2.785l-0-0.008c-0.056-1.575-0.076-2.061-0.076-6.053 0-3.994 0.020-4.481 0.076-6.075 0.019-1.007 0.209-1.964 0.544-2.85l-0.019 0.059c0.247-0.679 0.632-1.257 1.123-1.724l0.002-0.002c0.468-0.492 1.045-0.875 1.692-1.112l0.031-0.010c0.823-0.318 1.774-0.509 2.768-0.526l0.007-0c1.593-0.056 2.062-0.075 6.072-0.075zM16 1.004c-4.074 0-4.582 0.019-6.182 0.090-1.315 0.028-2.562 0.282-3.716 0.723l0.076-0.025c-1.040 0.397-1.926 0.986-2.656 1.728l-0.001 0.001c-0.745 0.73-1.333 1.617-1.713 2.607l-0.017 0.050c-0.416 1.078-0.67 2.326-0.697 3.628l-0 0.012c-0.075 1.6-0.090 2.108-0.090 6.182s0.019 4.582 0.090 6.182c0.028 1.315 0.282 2.562 0.723 3.716l-0.025-0.076c0.796 2.021 2.365 3.59 4.334 4.368l0.052 0.018c1.078 0.415 2.326 0.669 3.628 0.697l0.012 0c1.6 0.075 2.108 0.090 6.182 0.090s4.582-0.019 6.182-0.090c1.315-0.029 2.562-0.282 3.716-0.723l-0.076 0.026c2.021-0.796 3.59-2.365 4.368-4.334l0.018-0.052c0.416-1.078 0.669-2.326 0.697-3.628l0-0.012c0.075-1.6 0.090-2.108 0.090-6.182s-0.019-4.582-0.090-6.182c-0.029-1.315-0.282-2.562-0.723-3.716l0.026 0.076c-0.398-1.040-0.986-1.926-1.729-2.656l-0.001-0.001c-0.73-0.745-1.617-1.333-2.607-1.713l-0.050-0.017c-1.078-0.416-2.326-0.67-3.628-0.697l-0.012-0c-1.6-0.075-2.108-0.090-6.182-0.090z" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex">
                <div className="flex">
                  <Logo wh={40} />
                  <p className="text-3xl tracking-[-0.05em] font-bold content-center select-none">
                    SilverBack <b className="text-warm">group</b>
                  </p>
                </div>
              </div>
              <p className="pl-7">Copyright ©{new Date().getFullYear()}</p>
              <div className="sm:hidden">
                <p className="px-7 text-sm mb-2  mt-2">
                  SilverBack HQ - Station Mews, Lindsay Grove, Dublin 9, D09
                  CC92, Ireland <br />
                  <Link href="tel:+353 1 441 0102">+353 1 441 0102</Link> |{" "}
                  <Link href="mailto:work@silverback.ie">
                    work@silverback.ie
                  </Link>
                </p>
                <div className="px-7 flex gap-3 mb-10">
                  <Link
                    href="https://www.facebook.com/SilverBackStaffing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      height="18px"
                      version="1.1"
                      viewBox="0 0 32 32"
                      width="18px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>facebook</title>
                      <path d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/silverback-staffing/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      height="18px"
                      version="1.1"
                      viewBox="0 0 32 32"
                      width="18px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>linkedin</title>
                      <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/silverbackconstruction/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      height="18px"
                      version="1.1"
                      viewBox="0 0 32 32"
                      width="18px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>instagram</title>
                      <path d="M25.805 7.996c0 0 0 0.001 0 0.001 0 0.994-0.806 1.799-1.799 1.799s-1.799-0.806-1.799-1.799c0-0.994 0.806-1.799 1.799-1.799v0c0.993 0.001 1.798 0.805 1.799 1.798v0zM16 20.999c-2.761 0-4.999-2.238-4.999-4.999s2.238-4.999 4.999-4.999c2.761 0 4.999 2.238 4.999 4.999v0c0 0 0 0.001 0 0.001 0 2.76-2.237 4.997-4.997 4.997-0 0-0.001 0-0.001 0h0zM16 8.3c0 0 0 0-0 0-4.253 0-7.7 3.448-7.7 7.7s3.448 7.7 7.7 7.7c4.253 0 7.7-3.448 7.7-7.7v0c0-0 0-0 0-0.001 0-4.252-3.447-7.7-7.7-7.7-0 0-0 0-0.001 0h0zM16 3.704c4.003 0 4.48 0.020 6.061 0.089 1.003 0.012 1.957 0.202 2.84 0.538l-0.057-0.019c1.314 0.512 2.334 1.532 2.835 2.812l0.012 0.034c0.316 0.826 0.504 1.781 0.516 2.778l0 0.005c0.071 1.582 0.087 2.057 0.087 6.061s-0.019 4.48-0.092 6.061c-0.019 1.004-0.21 1.958-0.545 2.841l0.019-0.058c-0.258 0.676-0.64 1.252-1.123 1.726l-0.001 0.001c-0.473 0.484-1.049 0.866-1.692 1.109l-0.032 0.011c-0.829 0.316-1.787 0.504-2.788 0.516l-0.005 0c-1.592 0.071-2.061 0.087-6.072 0.087-4.013 0-4.481-0.019-6.072-0.092-1.008-0.019-1.966-0.21-2.853-0.545l0.059 0.019c-0.676-0.254-1.252-0.637-1.722-1.122l-0.001-0.001c-0.489-0.47-0.873-1.047-1.114-1.693l-0.010-0.031c-0.315-0.828-0.506-1.785-0.525-2.785l-0-0.008c-0.056-1.575-0.076-2.061-0.076-6.053 0-3.994 0.020-4.481 0.076-6.075 0.019-1.007 0.209-1.964 0.544-2.85l-0.019 0.059c0.247-0.679 0.632-1.257 1.123-1.724l0.002-0.002c0.468-0.492 1.045-0.875 1.692-1.112l0.031-0.010c0.823-0.318 1.774-0.509 2.768-0.526l0.007-0c1.593-0.056 2.062-0.075 6.072-0.075zM16 1.004c-4.074 0-4.582 0.019-6.182 0.090-1.315 0.028-2.562 0.282-3.716 0.723l0.076-0.025c-1.040 0.397-1.926 0.986-2.656 1.728l-0.001 0.001c-0.745 0.73-1.333 1.617-1.713 2.607l-0.017 0.050c-0.416 1.078-0.67 2.326-0.697 3.628l-0 0.012c-0.075 1.6-0.090 2.108-0.090 6.182s0.019 4.582 0.090 6.182c0.028 1.315 0.282 2.562 0.723 3.716l-0.025-0.076c0.796 2.021 2.365 3.59 4.334 4.368l0.052 0.018c1.078 0.415 2.326 0.669 3.628 0.697l0.012 0c1.6 0.075 2.108 0.090 6.182 0.090s4.582-0.019 6.182-0.090c1.315-0.029 2.562-0.282 3.716-0.723l-0.076 0.026c2.021-0.796 3.59-2.365 4.368-4.334l0.018-0.052c0.416-1.078 0.669-2.326 0.697-3.628l0-0.012c0.075-1.6 0.090-2.108 0.090-6.182s-0.019-4.582-0.090-6.182c-0.029-1.315-0.282-2.562-0.723-3.716l0.026 0.076c-0.398-1.040-0.986-1.926-1.729-2.656l-0.001-0.001c-0.73-0.745-1.617-1.333-2.607-1.713l-0.050-0.017c-1.078-0.416-2.326-0.67-3.628-0.697l-0.012-0c-1.6-0.075-2.108-0.090-6.182-0.090z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-1 sm:gap-0 sm:grid-cols-3 max-sm:px-10 p-0  sm:p-10">
                <Link className="max-sm:h-12" href="/">
                  <b className="hover:opacity-60 transition-opacity text-lg">
                    Home
                  </b>
                </Link>
                <Link className="max-sm:h-12" href="/connect">
                  <b className="hover:opacity-60 transition-opacity text-lg">
                    Contact
                  </b>
                </Link>
                <Link className="max-sm:h-12" href="/privacy-policy">
                  <b className="hover:opacity-60 transition-opacity text-lg ">
                    Privacy Policy
                  </b>
                </Link>
                <div className="hidden sm:block opacity-0">@dontfred</div>
                <div className="hidden sm:block opacity-0">@dontfred</div>
                <div className="hidden sm:block opacity-0">@dontfred</div>
                <b className="hidden sm:block text-warm text-lg">About</b>
                <b className="hidden sm:block text-warm text-lg">Job board</b>
                <b className="hidden sm:block text-warm text-lg">
                  Industry insights
                </b>
                <Link
                  aria-label="Go to here to learn more about our story"
                  href="/our-story"
                >
                  <b className="hidden sm:block hover:opacity-60 transition-opacity ">
                    Our Story
                  </b>
                </Link>
                <Link
                  aria-label="Go to see all available blue collar jobs"
                  href="/jobboard?category=blue-collar"
                >
                  <b className="hidden sm:block hover:opacity-60 transition-opacity ">
                    Blue Collar
                  </b>
                </Link>
                <Link
                  aria-label="Go to here to learn more about company news. A Blog series"
                  href="/industry-insights?category=company-news"
                >
                  <b className="hidden sm:block hover:opacity-60 transition-opacity ">
                    Company news
                  </b>
                </Link>

                <Link
                  aria-label="Go to here to learn more about the methods we use"
                  href="/methods"
                >
                  <b className="hidden sm:block hover:opacity-60 transition-opacity ">
                    Methods
                  </b>
                </Link>
                <Link
                  aria-label="Go to see all available white collar jobs"
                  href="/jobboard?category=white-collar"
                >
                  <b className="hidden sm:block hover:opacity-60 transition-opacity ">
                    White Collar
                  </b>
                </Link>
                <Link
                  aria-label="Go to here to learn more about better work. A Blog series"
                  href="/industry-insights?category=better-work"
                >
                  <b className="hidden sm:block hover:opacity-60 transition-opacity ">
                    Better work
                  </b>
                </Link>
                <Link
                  aria-label="Go to here to learn more about our partnerships"
                  href="/partnerships"
                >
                  <b className="hidden sm:block hover:opacity-60 transition-opacity ">
                    Partnerships
                  </b>
                </Link>
                <Link
                  aria-label="Go to see all available jobs."
                  href="/jobboard"
                >
                  <b className="hidden sm:block hover:opacity-60 transition-opacity ">
                    All
                  </b>
                </Link>
                <Link
                  aria-label="Go to here to learn more around industry. A Blog series"
                  href="/industry-insights/?category=around-industry"
                >
                  <b className="hidden sm:block hover:opacity-60 transition-opacity ">
                    Around Industry
                  </b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
