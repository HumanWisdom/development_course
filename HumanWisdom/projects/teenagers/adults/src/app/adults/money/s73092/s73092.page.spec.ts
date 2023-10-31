import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73092Page } from './s73092.page';

describe('S73092Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73092Page;
  let fixture: ComponentFixture<S73092Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73092Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73092Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
