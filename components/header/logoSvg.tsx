import * as React from "react";
import { motion } from "framer-motion";

const pathVarients = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const colors = {
  primary: "rgb(1, 116, 228)",
  onContent: "rgb(229, 242, 255)",
  border: "rgb(61, 64, 67)",
};

type props = {
  isScrolled?: boolean;
};

export const LogoSvg = ({ isScrolled }: props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={188}
    height={105}
    fill="none"
    initial="hidden"
    animate="visible"
  >
    <g clipPath="url(#a)">
      <g
        stroke={colors.primary}
        strokeLinecap="round"
        strokeWidth={10}
        filter="url(#b)"
      >
        <motion.path
          strokeOpacity={0.1}
          d="M71.808 6 10 64.254"
          variants={pathVarients}
        />
        <motion.path d="M71.808 6 10 64.254" variants={pathVarients} />
      </g>
      <g filter="url(#c)">
        <motion.path
          stroke={colors.primary}
          strokeLinecap="round"
          strokeWidth={10}
          d="m71.868 6.02 60.514 57.682"
          variants={pathVarients}
        />
      </g>
      <motion.path
        fill={isScrolled ? `${colors.border}` : `${colors.onContent}`}
        d="M72 35.145H60v12h12v-12ZM84 35.145H73v12h11v-12ZM60 49.145h12v11H60v-11ZM84 49.145H73v11h11v-11Z"
        variants={pathVarients}
      />
      <motion.path
        stroke={colors.primary}
        strokeLinecap="square"
        strokeWidth={10}
        d="m94.925 5.992-.094 18.59"
        variants={pathVarients}
      />
      <g filter="url(#d)">
        <motion.path
          fill={colors.primary}
          d="M43.563 91.207V75.379h4.187v15.828c0 1.51-.286 2.807-.86 3.89-.562 1.084-1.333 1.912-2.312 2.485-.969.573-2.068.86-3.297.86-1.25 0-2.364-.25-3.343-.75-.98-.5-1.75-1.261-2.313-2.282-.563-1.031-.844-2.333-.844-3.906h4.203c0 .844.094 1.52.282 2.031.198.5.468.865.812 1.094.354.219.755.328 1.203.328.47 0 .875-.146 1.219-.438.344-.291.604-.718.781-1.28.188-.563.282-1.24.282-2.032Zm13.859 6.922h-3.984l.03-3.485h3.954c1.156 0 2.068-.208 2.734-.625.677-.427 1.157-1.088 1.438-1.984.291-.896.437-2.052.437-3.469v-3.64c0-1.084-.078-2.005-.234-2.766-.156-.77-.411-1.396-.766-1.875a3.141 3.141 0 0 0-1.39-1.062c-.573-.23-1.282-.344-2.125-.344h-4.157v-3.5h4.157c1.312 0 2.5.213 3.562.64a7.387 7.387 0 0 1 2.734 1.844c.771.813 1.36 1.818 1.766 3.016.406 1.187.61 2.547.61 4.078v3.61c0 1.53-.204 2.89-.61 4.078-.406 1.187-.995 2.187-1.766 3a7.496 7.496 0 0 1-2.765 1.859c-1.073.416-2.281.625-3.625.625Zm-1.578-22.75v22.75h-4.188v-22.75h4.188Zm34.172 19.265v3.485H80.14v-3.485h9.875ZM81.344 75.38v22.75h-4.188v-22.75h4.188Zm7.344 9.344v3.39H80.14v-3.39h8.546Zm1.265-9.344v3.5h-9.812v-3.5h9.812ZM96 81.223l2.266 4.718 2.046-4.718h4.313l-4.391 8.28 4.547 8.626h-4.328l-2.344-4.89-2.25 4.89H91.5l4.406-8.578-4.25-8.328H96Zm18.125 0v3.046h-8.453v-3.046h8.453Zm-6.328-4.157h3.984v16.125c0 .49.052.87.157 1.141.104.26.255.438.453.531.208.094.458.14.75.14a4.02 4.02 0 0 0 1.062-.14l-.015 3.188a6.352 6.352 0 0 1-1 .281c-.365.073-.803.11-1.313.11-.813 0-1.526-.157-2.141-.47-.604-.322-1.078-.843-1.422-1.562-.343-.73-.515-1.682-.515-2.86V77.067Zm15.609 21.375c-1.125 0-2.125-.172-3-.515a5.925 5.925 0 0 1-2.203-1.5c-.604-.657-1.068-1.464-1.391-2.422-.312-.959-.468-2.057-.468-3.297v-1.516c0-1.406.161-2.625.484-3.656.323-1.042.771-1.9 1.344-2.578a5.4 5.4 0 0 1 2.094-1.531c.823-.344 1.729-.516 2.718-.516 1.063 0 1.99.177 2.782.531.802.344 1.463.86 1.984 1.547.521.688.906 1.542 1.156 2.563.261 1.01.391 2.182.391 3.515v1.922h-11.156v-2.922h7.218v-.39c-.02-.73-.109-1.35-.265-1.86-.156-.51-.406-.895-.75-1.156-.334-.27-.792-.406-1.375-.406-.459 0-.854.094-1.188.281-.333.177-.604.458-.812.844-.198.375-.349.88-.453 1.515-.105.625-.157 1.391-.157 2.297v1.516c0 .802.073 1.484.219 2.047.146.552.36 1.005.641 1.36.281.343.625.593 1.031.75.406.155.88.234 1.422.234.812 0 1.526-.146 2.14-.438a5.19 5.19 0 0 0 1.594-1.203l1.672 2.453c-.302.406-.713.807-1.234 1.203-.521.386-1.151.703-1.891.953-.729.25-1.578.375-2.547.375Zm12.625-13.703v13.39h-4V81.224h3.797l.203 3.515Zm4.031-3.64-.031 3.984a6.057 6.057 0 0 0-.703-.094 8.5 8.5 0 0 0-.703-.031c-.49 0-.911.083-1.266.25a2.384 2.384 0 0 0-.89.719c-.24.312-.422.698-.547 1.156a7.154 7.154 0 0 0-.234 1.531l-.813-.14c0-1.084.083-2.084.25-3 .177-.917.432-1.714.766-2.391.343-.688.765-1.219 1.265-1.594a2.74 2.74 0 0 1 1.719-.578c.198 0 .411.02.641.063.239.03.422.073.546.125Zm6.594.125v16.906h-4.015V81.223h4.015Zm-4.218-4.407c0-.635.197-1.156.593-1.562.396-.417.938-.625 1.625-.625.688 0 1.224.208 1.61.625.385.406.578.927.578 1.562 0 .625-.193 1.146-.578 1.563-.386.406-.922.61-1.61.61-.687 0-1.229-.204-1.625-.61-.396-.417-.593-.938-.593-1.563Zm7.374 13.485v-1.235c0-1.323.162-2.49.485-3.5.323-1.02.781-1.875 1.375-2.562a5.812 5.812 0 0 1 2.125-1.563c.833-.354 1.755-.53 2.765-.53 1.032 0 1.959.176 2.782.53a5.774 5.774 0 0 1 2.14 1.563c.605.687 1.063 1.541 1.375 2.562.323 1.01.485 2.177.485 3.5v1.235c0 1.323-.162 2.49-.485 3.5-.312 1.01-.77 1.864-1.375 2.562a5.774 5.774 0 0 1-2.14 1.563c-.823.343-1.74.515-2.75.515-1.011 0-1.933-.172-2.766-.515a5.949 5.949 0 0 1-2.14-1.563c-.605-.698-1.068-1.552-1.391-2.562-.323-1.01-.485-2.177-.485-3.5Zm4.016-1.235v1.235c0 .823.063 1.536.188 2.14.125.594.307 1.089.546 1.485.25.396.542.692.876.89.343.188.729.282 1.156.282.458 0 .859-.094 1.203-.282.344-.198.63-.494.859-.89.229-.396.401-.89.516-1.485.114-.604.172-1.317.172-2.14v-1.235c0-.802-.068-1.505-.203-2.109-.125-.604-.308-1.104-.547-1.5-.24-.396-.532-.693-.875-.89a2.187 2.187 0 0 0-1.157-.313c-.416 0-.791.104-1.124.312-.334.198-.626.495-.876.891-.239.396-.421.896-.546 1.5-.125.604-.188 1.307-.188 2.11Zm16.484-4.328v13.39h-4V81.224h3.797l.203 3.515Zm4.032-3.64-.032 3.984a6.057 6.057 0 0 0-.703-.094 8.5 8.5 0 0 0-.703-.031c-.489 0-.911.083-1.265.25a2.387 2.387 0 0 0-.891.719c-.24.312-.422.698-.547 1.156a7.154 7.154 0 0 0-.234 1.531l-.813-.14c0-1.084.084-2.084.25-3 .177-.917.433-1.714.766-2.391.344-.688.766-1.219 1.266-1.594a2.737 2.737 0 0 1 1.718-.578c.198 0 .412.02.641.063.239.03.422.073.547.125Z"
          variants={pathVarients}
        />
      </g>
      <g
        stroke={colors.primary}
        strokeLinecap="square"
        strokeWidth={2}
        filter="url(#e)"
      >
        <motion.path
          strokeOpacity={0.1}
          d="m172.305 102.012-137.305.3"
          variants={pathVarients}
        />
        <motion.path d="m172.305 102.012-137.305.3" variants={pathVarients} />
      </g>
      <g filter="url(#f)">
        <motion.path
          stroke={colors.primary}
          strokeLinecap="round"
          strokeWidth={10}
          d="m133 64.419 41.06.221"
          variants={pathVarients}
        />
      </g>
    </g>
  </motion.svg>
);
