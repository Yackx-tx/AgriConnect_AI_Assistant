import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const diseases = [
  {
    name: "Late Blight",
    crops: ["Tomato", "Potato"],
    symptoms: "Dark brown spots on leaves, white mold on undersides, rapid plant death",
    treatment: "Apply copper-based fungicides, remove infected plants, improve air circulation",
  },
  {
    name: "Leaf Rust",
    crops: ["Maize", "Wheat"],
    symptoms: "Orange-brown pustules on leaves, yellowing, reduced yield",
    treatment: "Use resistant varieties, apply fungicides early, remove crop residue",
  },
  {
    name: "Anthracnose",
    crops: ["Beans", "Cassava"],
    symptoms: "Dark sunken lesions on stems and pods, leaf spots, plant wilting",
    treatment: "Use disease-free seeds, rotate crops, apply appropriate fungicides",
  },
  {
    name: "Bacterial Wilt",
    crops: ["Tomato", "Eggplant"],
    symptoms: "Sudden wilting, yellowing leaves, brown vascular tissue",
    treatment: "Remove infected plants, practice crop rotation, use resistant varieties",
  },
]

export function CommonDiseases() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Common Crop Diseases</CardTitle>
        <CardDescription>Learn about prevalent diseases in Rwanda</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {diseases.map((disease, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                <div>
                  <div className="font-semibold">{disease.name}</div>
                  <div className="text-sm text-muted-foreground">Affects: {disease.crops.join(", ")}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Symptoms</h4>
                    <p className="text-sm text-muted-foreground">{disease.symptoms}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Treatment</h4>
                    <p className="text-sm text-muted-foreground">{disease.treatment}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
