import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132154Page } from './s132154.page';

describe('S132154Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132154Page;
  let fixture: ComponentFixture<S132154Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132154Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132154Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
