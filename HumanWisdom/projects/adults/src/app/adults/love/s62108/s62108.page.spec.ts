import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62108Page } from './s62108.page';

describe('S62108Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62108Page;
  let fixture: ComponentFixture<S62108Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62108Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62108Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
