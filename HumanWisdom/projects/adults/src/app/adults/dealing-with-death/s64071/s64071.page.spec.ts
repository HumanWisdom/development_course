import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64071Page } from './s64071.page';

describe('S64071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64071Page;
  let fixture: ComponentFixture<S64071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
