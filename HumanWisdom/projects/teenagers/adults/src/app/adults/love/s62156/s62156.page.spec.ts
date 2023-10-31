import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62156Page } from './s62156.page';

describe('S62156Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62156Page;
  let fixture: ComponentFixture<S62156Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62156Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62156Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
