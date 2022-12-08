import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62066Page } from './s62066.page';

describe('S62066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62066Page;
  let fixture: ComponentFixture<S62066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
