import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45036Page } from './s45036.page';

describe('S45036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45036Page;
  let fixture: ComponentFixture<S45036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
