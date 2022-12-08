import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62053Page } from './s62053.page';

describe('S62053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62053Page;
  let fixture: ComponentFixture<S62053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
