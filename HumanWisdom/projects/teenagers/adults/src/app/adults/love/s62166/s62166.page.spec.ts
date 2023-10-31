import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62166Page } from './s62166.page';

describe('S62166Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62166Page;
  let fixture: ComponentFixture<S62166Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62166Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62166Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
