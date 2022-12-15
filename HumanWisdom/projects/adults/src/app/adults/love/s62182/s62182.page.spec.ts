import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62182Page } from './s62182.page';

describe('S62182Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62182Page;
  let fixture: ComponentFixture<S62182Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62182Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62182Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
