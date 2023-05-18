import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116052Page } from './s116052.page';

describe('S116052Page', () => {
      
    let component:  S116052Page;
  let fixture: ComponentFixture<S116052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
