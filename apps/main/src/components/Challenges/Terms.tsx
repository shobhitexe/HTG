import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui";

export default function Terms() {
  return (
    <Dialog>
      <DialogTrigger className="underline">
        Trading rules and behaviour
      </DialogTrigger>
      <DialogContent className="bg-black">
        <DialogHeader>
          <DialogTitle>
            Trading Rules and Behaviour - Hera Trading Capital
          </DialogTitle>
          <DialogDescription className="pt-5 max-h-[400px] overflow-auto text-left">
            At Hera Trading Capital, we offer an{" "}
            <strong>Evaluation Course,</strong> consisting of either one or two
            phases. Successfully completing your phase(s) qualifies you as a{" "}
            <strong>Funded Trader.</strong> A robust and dynamic trading system,
            coupled with effective risk management, is essential for passing the
            evaluation. Upon reaching your profit target(s), your entire
            evaluation will undergo a manual review by our Risk Team, which will
            be completed within <strong>24-48 hours.</strong>
            <div className="flex flex-col gap-1">
              <h1 className="text-lg pt-5">Rule Breaches and Consequences</h1>
              <div>In the event of a rule violation:</div>
              <ul>
                <li>● All open positions will be immediately closed.</li>
                <li>● The trader's account will be terminated.</li>
                <li>● Eligibility for any rewards will be revoked.</li>
              </ul>
            </div>
            <hr className="mt-5" />
            <div className="flex flex-col gap-5">
              <h1 className="text-lg pt-5">Evaluation Course Phases</h1>
              <h2>1-Step Accounts</h2>
              <div>
                In 1-Step accounts, there is only one evaluation phase designed
                to assess your trading skills and define your trading approach
              </div>
              <ul>
                <li>● Profit Target: 9%</li>
                <li>
                  ● Minimum Trading Days: 4 Days (Each trader much achieve a
                  minimum of 0.75% profit on their balance for at least 3
                  trading days)
                </li>
                <li>● Maximum Daily Loss (Static): 3%</li>
                <li>● Maximum Loss (Static): 6%</li>
                <li>● Consistency Rules: None</li>
                <li>● Rule Breaches: Not allowed</li>
              </ul>
              <div>Add-ons available to traders include:</div>
              <ul>
                <li>● Up to 100% profit split.</li>
                <li>● Option to reduce your minimum trading days to 0.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <h1 className="text-lg">Trading Rules</h1>
              <h2>Trading During News and Over Weekends</h2>

              <ul>
                <li>
                  ● Evaluation Phase: You may hold trades during news events and
                  over weekends.
                </li>
                <li>
                  ● Funded Phase: You may hold trades during news events and
                  over weekends.
                </li>
              </ul>
            </div>
            <hr className="mt-5" />
            <div className="flex flex-col gap-5 mt-5">
              <h2>2-Step Accounts</h2>
              <div>
                In 2-Step accounts, the evaluation consists of two phases,
                assessing your trading skills and defining your trading
                approach.
              </div>
              <ul>
                <li>● Phase 1 Profit Target: 9%</li>
                <li>● Phase 2 Profit Target: 6%</li>
                <li>● Minimum Trading Days: None</li>
                <li>● Maximum Daily Loss (Static): 5%</li>
                <li>● Maximum Loss (Static): 8%</li>
                <li>● Consistency Rules: None</li>
                <li>● Rule Breaches: Not allowed</li>
              </ul>
              <div>Add-ons available to traders include:</div>
              <ul>
                <li>● Up to 100% profit split.</li>
                <li>● Option to reduce your minimum trading days to 0.</li>
              </ul>
            </div>
            <hr className="mt-5" />
            <div className="flex flex-col gap-5 mt-5">
              <h1 className="text-lg">Drawdown Calculations</h1>
              <h2>
                Equity/Balance Rule: During the daily snapshot, both balance and
                equity values are checked. The base for calculating daily loss
                is the less favorable value for the trader, i.e., the higher
                value.
              </h2>

              <ul>
                <li>
                  ● If the trader has profitable trades, the equity value
                  (balance + open profit) is higher than the balance, and the
                  daily loss is calculated from the equity.
                </li>
                <li>
                  ● If the trader has losing trades, the daily loss is
                  calculated from the balance.
                </li>
              </ul>

              <div>Example:</div>
              <strong>
                Scenario 1: Trader has profitable trades (Equity {">"} Balance)
              </strong>

              <ul>
                <li>● Account Balance: $100,000</li>
                <li>● Open Profit (Floating PnL): $5,000</li>
                <li>● Equity: $105,000 (Balance + Open Profit)</li>
                <li>
                  ● Maximum Daily Loss Limit: 5% of $105,000
                  <br />○ Calculation: $105,000 x 0.05 = $5,250
                  <br />○ Result: The trader is allowed to lose up to $5,250 for
                  the day.
                </li>
              </ul>

              <strong>
                Scenario 2: Trader has losing trades (Equity {"<"} Balance)
              </strong>

              <ul>
                <li>● Account Balance: $100,000</li>
                <li>● Open Profit (Floating PnL): -$3,000</li>
                <li>● Equity: $97,000 (Balance - Open Loss)</li>
                <li>
                  ● Maximum Daily Loss Limit: 5% of $100,000
                  <br />○ Calculation: $100,000 x 0.05 = $5,000
                  <br />○ Result: The trader is allowed to lose up to $5,000 for
                  the day.
                </li>
              </ul>
            </div>
            <hr className="mt-5" />
            <div className="flex flex-col gap-5 mt-5">
              <h1 className="text-lg">
                Trading Strategies and Prohibited Activities
              </h1>
              <h2>
                For Hera Trading Capital, the following trading practices are
                strictly prohibited:
              </h2>

              <ul>
                <li>
                  1. Unrealistic Trading Opportunities: Exploiting unrealistic
                  prices or trade opportunities, such as arbitrage, latency
                  exploitation, All or Nothing (trading without proper risk
                  management), or front-running price feeds
                </li>
                <li>
                  2. Latency Trading: Trading based on latency advantages.
                </li>
                <li>
                  3. Arbitrage Trading: Engaging in arbitrage trading methods.
                </li>
                <li>
                  4. High-Frequency Trading (HFT): High-frequency trading
                  practices.
                </li>
                <li>
                  5. Reverse Trading Hedging: Strategies involving reverse
                  trading or group hedging
                </li>
                <li>
                  6. Order Book Spamming: Manipulating the order book by
                  spamming orders.
                </li>
              </ul>

              <div>Additional Restrictions:</div>

              <ul>
                <li>
                  ● Account management services by third parties are not
                  allowed.
                </li>
                <li>
                  ● All accounts and trades must be conducted by the individual
                  whose name is on the account.
                </li>
              </ul>

              <div>
                If you are uncertain whether your EA or manual scalping strategy
                is compliant, please contact us before trading.
              </div>

              <strong>Order Book Spamming Defined</strong>

              <div>
                Order book spamming is a manipulative tactic where a trader
                places a large number of orders to create the false appearance
                of market activity or specific price trends. This practice
                misleads other traders by creating artificial pressure,
                influencing their trading decisions
              </div>

              <strong>Reasons for Prohibiting Order Book Spamming</strong>

              <ul>
                <li>
                  1. Unfair Advantage: Traders gain an unfair edge, undermining
                  fairness and platform integrity.
                </li>
                <li>
                  2. System Strain: Excessive orders strain the system, causing
                  delays and instability for all users.
                </li>
              </ul>

              <div>Violating any policies will result in:</div>

              <ul>
                <li>
                  ● Immediate Termination: Account closure and agreement
                  termination.
                </li>
                <li>
                  ● Forfeiture of Profits: Any profits from prohibited practices
                  will be void.
                </li>

                <li>
                  ● Evaluation Review and Disqualification: All passed
                  evaluations are subject to review and may be disqualified.
                </li>
              </ul>

              <hr className="mt-5" />

              <div>
                At Hera Trading Capital, we enforce strict measures to maintain
                a fair and compliant trading environment. Adherence to these
                rules ensures your success and supports a level playing field
                for all traders.
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
