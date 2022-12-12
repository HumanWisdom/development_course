import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62024Page } from './s62024.page';

describe('S62024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62024Page;
  let fixture: ComponentFixture<S62024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
