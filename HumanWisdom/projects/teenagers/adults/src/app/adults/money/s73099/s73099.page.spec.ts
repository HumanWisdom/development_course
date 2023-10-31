import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73099Page } from './s73099.page';

describe('S73099Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73099Page;
  let fixture: ComponentFixture<S73099Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73099Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73099Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
