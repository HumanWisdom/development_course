import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62016p1Page } from './s62016p1.page';

describe('S62016p1Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62016p1Page;
  let fixture: ComponentFixture<S62016p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62016p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62016p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
