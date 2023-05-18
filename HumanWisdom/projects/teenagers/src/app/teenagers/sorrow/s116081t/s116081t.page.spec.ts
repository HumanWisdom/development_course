import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116081tPage } from './s116081t.page';

describe('S116081tPage', () => {
      
    let component:  S116081tPage;
  let fixture: ComponentFixture<S116081tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116081tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116081tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
