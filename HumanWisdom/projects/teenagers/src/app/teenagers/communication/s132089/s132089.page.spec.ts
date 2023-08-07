import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132089Page } from './s132089.page';

describe('S132089Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132089Page;
  let fixture: ComponentFixture<S132089Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132089Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132089Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
