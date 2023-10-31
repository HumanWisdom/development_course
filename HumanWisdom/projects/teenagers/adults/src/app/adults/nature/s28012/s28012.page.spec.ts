import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S28012Page } from './s28012.page';

describe('S28012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S28012Page;
  let fixture: ComponentFixture<S28012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S28012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S28012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
