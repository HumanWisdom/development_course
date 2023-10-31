import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53149Page } from './s53149.page';

describe('S53149Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53149Page;
  let fixture: ComponentFixture<S53149Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53149Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53149Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
