import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62134Page } from './s62134.page';

describe('S62134Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62134Page;
  let fixture: ComponentFixture<S62134Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62134Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62134Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
