import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132129Page } from './s132129.page';

describe('S132129Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132129Page;
  let fixture: ComponentFixture<S132129Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132129Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132129Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
