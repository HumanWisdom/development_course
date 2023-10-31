import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62017Page } from './s62017.page';

describe('S62017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62017Page;
  let fixture: ComponentFixture<S62017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
