import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62197Page } from './s62197.page';

describe('S62197Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62197Page;
  let fixture: ComponentFixture<S62197Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62197Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62197Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
