import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Save } from "lucide-react";

interface CodeEditorProps {
  filePath: string;
  initialCode: string;
  onSave: (code: string) => void;
}

export function CodeEditor({ filePath, initialCode, onSave }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(code);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="w-5 h-5" />
          {filePath}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="font-mono text-sm min-h-[400px]"
          spellCheck={false}
        />
        <Button onClick={handleSave} disabled={saving} className="mt-4">
          <Save className="w-4 h-4 mr-2" />
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </CardContent>
    </Card>
  );
}
