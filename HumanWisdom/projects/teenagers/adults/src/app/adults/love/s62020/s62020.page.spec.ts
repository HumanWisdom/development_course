import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62020Page } from './s62020.page';

describe('S62020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62020Page;
  let fixture: ComponentFixture<S62020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
