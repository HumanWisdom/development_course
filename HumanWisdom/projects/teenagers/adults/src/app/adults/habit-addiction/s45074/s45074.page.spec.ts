import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45074Page } from './s45074.page';

describe('S45074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45074Page;
  let fixture: ComponentFixture<S45074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
