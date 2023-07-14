import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132020Page } from './s132020.page';

describe('S132020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132020Page;
  let fixture: ComponentFixture<S132020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
