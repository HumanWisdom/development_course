import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45046Page } from './s45046.page';

describe('S45046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45046Page;
  let fixture: ComponentFixture<S45046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
