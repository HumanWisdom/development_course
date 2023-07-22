import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132197Page } from './s132197.page';

describe('S132197Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132197Page;
  let fixture: ComponentFixture<S132197Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132197Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132197Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
