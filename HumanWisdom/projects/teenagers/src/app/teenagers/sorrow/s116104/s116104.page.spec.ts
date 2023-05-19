import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116104Page } from './s116104.page';

describe('S116104Page', () => {
      
    let component:  S116104Page;
  let fixture: ComponentFixture<S116104Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116104Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116104Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
