import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62193Page } from './s134197.page';

describe('S62193Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62193Page;
  let fixture: ComponentFixture<S62193Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62193Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62193Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
