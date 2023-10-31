import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62067Page } from './s62067.page';

describe('S62067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62067Page;
  let fixture: ComponentFixture<S62067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
